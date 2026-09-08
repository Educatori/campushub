/* PERMESSI.JS 
 * Qui puoi aggiornare studenti, orari e calendari senza toccare il codice logico
 */

// x. ANAGRAFICA STUDENTI CONVITTORI ED ESTERNI

const LAB_PRANZO = { 
    
    1: ['3A'], 2: ['5A', '5B'], 3: ['1A','4B'], 4: ['1B', '4C']
};


// CONFIGURAZIONE TURNI BASE DINNER
const TURNI_DINNER = { 
    1: ['1A', '1B', '1P', '2A', '2B', '2P', '3P'], 
    2: ['3A', '3B', '3C', '4A', '4B', '5A', '5B'] 
};

 // CONFIGURAZIONE CLASSI LAB DINNER
const LAB_DINNER={ 
   

};



// 1. TABELLA OVERRIDE TURNI DINNER (La modifica suggerita)
// Formato: "COGNOME": { GiornoSettimana: TurnoDestinazione } "TEBANO": { 1: 2, 2: 2, 3: 2, 4: 2, 5: 2 }, // Sempre turno 2
// GiornoSettimana: 1=Lun, 2=Mar, 3=Mer, 4=Gio, 5=Ven
const OVERRIDE_TURNI_DINNER = {
    
   
};

// 2. PERMESSI PERMANENTI (Dettaglio Orari)
    const ORARI_PP = { 
        // Configurazione orari PP predefiniti (Giorno: 1=Lun, 2=Mar, 3=Mer, 4=Gio)
    // AGGIUNGERE QUI ALTRI PP "BERRUTI A": { 4: { out: "13:30", in: "NO rientro" }}
        
   
};

 


// 3. ASSENTI PERMESSO DINNER (Chi non cena per giorno)
 const ASSENTI_PERMESSO = { 
   // 1: ['TESSAR]
    
};

// 4. CALENDARIO LABORATORI DINNER (G1/G2 per 5A e 5B)
const CALENDARIO_GRUPPI_DINNER = { 
         
    "17/09/2026": "gr2",
    "24/09/2026": "gr1",
    "01/10/2026": "gr2",
    "08/10/2026": "gr1",
    "01/10/2026": "gr2",
    "08/10/2026": "gr1",
    "15/10/2026": "gr2",
    "22/10/2026": "gr1",
    "29/10/2026": "gr2",
    "05/11/2026": "gr1",
    "12/11/2026": "gr2",
    "19/11/2026": "gr1",
    "26/11/2026": "gr2",
    "03/12/2026": "gr1",
    "10/12/2026": "gr2",
    "17/12/2026": "gr1",
    "07/01/2027": "gr2",
    "14/01/2027": "gr1",
    "21/01/2027": "gr2",
    "28/01/2027": "gr1",
    "04/02/2027": "gr2",
    "18/02/2027": "gr2",
    "25/02/2027": "gr1",
    "04/03/2027": "gr2",
    "11/03/2027": "gr1",
    "18/03/2027": "gr2",
    "01/04/2027": "gr2",
    "08/04/2027": "gr1",
    "15/04/2027": "gr2",
    "22/04/2027": "gr1",
    "29/04/2027": "gr2",
    "06/05/2027": "gr1",
    "13/05/2027": "gr2",
    "20/05/2027": "gr1",
    "27/05/2027": "gr2",
    "03/06/2027": "gr1"
};

 
