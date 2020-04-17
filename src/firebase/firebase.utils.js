import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// snippet copied from firebase
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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  // if noone is signed up, do nothing
  if (!userAuth) return;

  // look for the snapshot in the database - does the user exist?
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapshot = await userRef.get();

  // if the document does not exist - we will create it!
  // For that, we need documentRef object
  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    // user creation
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("erroe creating user", error.message);
    }
  }
  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// setting up google sign up
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
