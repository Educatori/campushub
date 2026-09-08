// Configurazione Firebase (hub-config.js) del tuo progetto


// Configurazione Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCsI40TPF3XQjeJlsPmRKq4aFyO-4ceA1A",
  authDomain: "campushub-90d60.firebaseapp.com",
  databaseURL: "https://campushub-90d60-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "campushub-90d60",
  storageBucket: "campushub-90d60.firebasestorage.app",
  messagingSenderId: "318654288542",
  appId: "1:318654288542:web:069cf435aeab017481e18f",
  measurementId: "G-R5LPY2B2X5"
};

// Inizializzazione Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

// Riferimenti ai servizi principali da usare negli altri file JS
const db = firebase.database();
const auth = firebase.auth();
