// firebase-hub-sync.js

// 1. FUNZIONE DI LOGIN
function login() {
    const emailInput = document.getElementById('loginEmail');
    const passwordInput = document.getElementById('loginPassword');
    const errorDiv = document.getElementById('loginError');

    const email = emailInput ? emailInput.value.trim() : '';
    const password = passwordInput ? passwordInput.value : '';

    if (!errorDiv) return;

    if (!email || !password) {
        errorDiv.innerText = "Inserisci sia email che password.";
        return;
    }

    auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            errorDiv.innerText = "";
            const loginScreen = document.getElementById('loginScreen');
            if (loginScreen) loginScreen.style.display = 'none';
            console.log("👋 Benvenuto Amministratore:", userCredential.user.email);
            
            inizializzaDatiDalCloud();
        })
        .catch((error) => {
            console.error("Errore di login:", error);
            errorDiv.innerText = "Credenziali errate o accesso negato.";
        });
}

// 2. FUNZIONE DI LOGOUT
function logout() {
    auth.signOut().then(() => {
        const loginScreen = document.getElementById('loginScreen');
        if (loginScreen) loginScreen.style.display = 'flex';
        window.location.reload();
    }).catch((error) => {
        console.error("Errore durante il logout:", error);
    });
}

// 3. CONTROLLO STATO AUTENTICAZIONE (Persistenza Sessione)
auth.onAuthStateChanged((user) => {
    const loginScreen = document.getElementById('loginScreen');
    const statusElem = document.getElementById('connection-status');

    if (user) {
        if (loginScreen) loginScreen.style.display = 'none';
        if (statusElem) statusElem.innerHTML = `🟢 Connesso: ${user.email || 'Admin'}`;
        inizializzaDatiDalCloud();
    } else {
        if (loginScreen) loginScreen.style.display = 'flex';
        if (statusElem) statusElem.innerHTML = "🔴 Non connesso";
    }
});

// 4. RECUPERO DATI DA FIREBASE IN TEMPO REALE
function inizializzaDatiDalCloud() {
    const infoReset = document.getElementById('info-reset');
    if (infoReset) infoReset.innerText = "Scaricamento dati in corso...";

    // Ascolta i dati da Firebase
    db.ref('archivio_campus').on('value', (snapshot) => {
        const datiCloud = snapshot.val();
        
        if (datiCloud) {
            console.log("📊 Dati ricevuti da Firebase:", datiCloud);
            
            // SOVRASCRITTURA DELLE VARIABILI GLOBALI (WINDOW)
            // Supporta sia l'alias "studenti" che "studenticonvittori" per compatibilità
            const listaStudenti = datiCloud.studenti || datiCloud.studenticonvittori || [];
            
            window.tuttiStudenti = listaStudenti;
            window.studenticonvittori = listaStudenti; // Mantiene la sincronizzazione con campus_hub-script.js
            
            window.ORARI_PP = datiCloud.orari_pp || {};
            window.OVERRIDE_TURNI_DINNER = datiCloud.override_turni || {};
            window.ASSENTI_PERMESSO = datiCloud.assenti_permesso || {};
            window.CALENDARIO_GRUPPI_DINNER = datiCloud.calendario_gruppi || {};
            window.LAB_PRANZO = datiCloud.lab_pranzo || {};
            window.TURNI_DINNER = datiCloud.turni_dinner || {};
            window.LAB_DINNER = datiCloud.lab_dinner || {};

            // Aggiorna l'orario nell'interfaccia
            const oraAttuale = new Date().toLocaleTimeString('it-IT');
            if (infoReset) {
                infoReset.innerText = `Ultimo aggiornamento cloud: oggi alle ${oraAttuale}`;
            }

            // Ridisegna la dashboard tramite la funzione principale
            if (typeof applicaFiltri === 'function') {
                applicaFiltri();
            }
        } else {
            if (infoReset) {
                infoReset.innerText = "Database vuoto. Inserire i dati iniziali.";
            }
        }
    }, (error) => {
        console.error("Errore nel recupero dati (Permessi insufficienti?):", error);
        if (infoReset) {
            infoReset.innerText = "Errore di sincronizzazione: Accesso Negato.";
        }
    });
}
