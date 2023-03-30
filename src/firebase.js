import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {

  apiKey: "AIzaSyBPwBmxzERyCAFb6B8pLo5k0xWuqRuWp6U",

  authDomain: "slack-copy-ed14a.firebaseapp.com",

  projectId: "slack-copy-ed14a",

  storageBucket: "slack-copy-ed14a.appspot.com",

  messagingSenderId: "968711250392",

  appId: "1:968711250392:web:70a3d491ae0f8180f852ad"

};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };