/* ==========================================================================
   CONVITTORI.JS — Ottimizzato per Firebase Realtime Database
   ========================================================================== */

function elaboraAnagraficaDaFirebase(datiInArrivo) {
    // 1. Fallback di sicurezza se i dati del database non sono validi o sono vuoti
    let listaGrezza = [];
    if (datiInArrivo) {
        if (Array.isArray(datiInArrivo)) {
            listaGrezza = datiInArrivo;
        } else if (typeof datiInArrivo === 'object') {
            listaGrezza = Object.values(datiInArrivo);
        }
    }

    if (listaGrezza.length === 0) {
        console.warn("⚠️ Nessun record ricevuto da Firebase per l'anagrafica.");
        window.studenticonvittori = [];
        return [];
    }

    // 2. Applica il filtro storico: include solo i residenti reali (stanze numeriche 101-221)
    const convittoriFiltrati = listaGrezza.filter(s => {
        if (!s || !s.room) return false;
        const roomNum = parseInt(s.room, 10);
        return !isNaN(roomNum) && roomNum >= 101 && roomNum <= 221;
    });

    // 3. Mappa e normalizza i campi sul perimetro globale per garantire retrocompatibilità
    window.studenticonvittori = convittoriFiltrati.map(s => ({
        cognome: (s.cognome || "").trim(),
        nome: (s.nome || "").trim(),
        classe: (s.classe || "").trim(),
        room: s.room.toString(),
        gruppo: (s.gruppo || "").trim(),
        percorso: (s.percorso || "").trim()
    }));

    // Ordina alfabeticamente per cognome per facilitare il rendering visivo dell'appello
    window.studenticonvittori.sort((a, b) => a.cognome.localeCompare(b.cognome));

    console.log(`🚀 [Anagrafica Sync] Convittori attivi filtrati dal Cloud: ${window.studenticonvittori.length}`);
    return window.studenticonvittori;
}
