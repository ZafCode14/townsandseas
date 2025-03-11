// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBdSt6YM2BWKIRVFId-kDB5jtD6QspJmog",
  authDomain: "townsandseas-aa216.firebaseapp.com",
  projectId: "townsandseas-aa216",
  storageBucket: "townsandseas-aa216.firebasestorage.app",
  messagingSenderId: "575895418413",
  appId: "1:575895418413:web:1bddcc5ca03c67c4c7eaa4",
  measurementId: "G-PS20L7XHEC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app)

export { firestore, auth };