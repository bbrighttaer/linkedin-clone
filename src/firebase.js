import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCD3UjMaHXJviFnRVG2S8MiCI-fpdO9VXQ",
    authDomain: "linkedin-clone-306e8.firebaseapp.com",
    projectId: "linkedin-clone-306e8",
    storageBucket: "linkedin-clone-306e8.appspot.com",
    messagingSenderId: "288682026659",
    appId: "1:288682026659:web:b7d45d2ec5514c2b3dc116"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
