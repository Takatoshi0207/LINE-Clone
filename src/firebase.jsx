import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCaTlE6dbQHt7P-BhNhhBcyFRg96SWTGDY",
  authDomain: "line-clone-cbc07.firebaseapp.com",
  projectId: "line-clone-cbc07",
  storageBucket: "line-clone-cbc07.appspot.com",
  messagingSenderId: "560448469971",
  appId: "1:560448469971:web:26ff7c6e25cdf66fb48d26"
})

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export { db, auth }