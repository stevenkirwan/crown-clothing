import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDM88YL-xLUJuGobHAcFASrDk6XvTfg9ZU",
  authDomain: "crwn-db-b651f.firebaseapp.com",
  databaseURL: "https://crwn-db-b651f.firebaseio.com",
  projectId: "crwn-db-b651f",
  storageBucket: "crwn-db-b651f.appspot.com",
  messagingSenderId: "617076776767",
  appId: "1:617076776767:web:0d9865929636a4f93f7d8a",
  measurementId: "G-FLZB557M98"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account"
});

export const signInWithGoogle = () => firebase.auth().signInWithPopup(provider);
