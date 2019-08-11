import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDLeQ0bcY4bhOtwVMcyPnhKiS23AGJBuyk",
  authDomain: "e-commerce-db-b8e2b.firebaseapp.com",
  databaseURL: "https://e-commerce-db-b8e2b.firebaseio.com",
  projectId: "e-commerce-db-b8e2b",
  storageBucket: "",
  messagingSenderId: "1074470678537",
  appId: "1:1074470678537:web:39381377da2353d2"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) {
    return;
  }

  var userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;