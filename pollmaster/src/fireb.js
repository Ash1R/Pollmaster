import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD2BOJ7fKJ9SHGeyIqhV4DUfdfmvmUi4X4",
    authDomain: "pollmaster-4da41.firebaseapp.com",
    projectId: "pollmaster-4da41",
    storageBucket: "pollmaster-4da41.appspot.com",
    messagingSenderId: "894179279225",
    appId: "1:894179279225:web:cc4b914be0b68346846fa8",
    measurementId: "G-QJZ4GCL1TZ"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
export default db;