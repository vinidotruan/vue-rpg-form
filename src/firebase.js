import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyCHvFs_91ZyEqYLCW5dPktSejnf_Y54iQw",
  authDomain: "rpg-form.firebaseapp.com",
  projectId: "rpg-form",
  storageBucket: "rpg-form.appspot.com",
  messagingSenderId: "189211814475",
  appId: "1:189211814475:web:ba99024ea733fe370fbbce",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export const db = firebaseApp.firestore();
