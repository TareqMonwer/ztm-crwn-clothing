import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import firebaseConfig from '../../env';

firebase.initializeApp(firebaseConfig);


export const auth = firebase.auth();
export const firestore = firebase.firestore();

const porvider = new firebase.auth.GoogleAuthProvider()
porvider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(porvider);

export default firebase;