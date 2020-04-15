import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var config = {
  apiKey: "AIzaSyCPBWdU6KP5OgtjO5Fgg21gH6NxbWHS7_o",
  authDomain: "store-a4da7.firebaseapp.com",
  databaseURL: "https://store-a4da7.firebaseio.com",
  projectId: "store-a4da7",
  storageBucket: "store-a4da7.appspot.com",
  messagingSenderId: "659820826370",
  appId: "1:659820826370:web:0797feaabdb1059ad17c1b",
  measurementId: "G-84RY07FGBH",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// setting up google sign up
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
