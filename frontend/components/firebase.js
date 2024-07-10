import { initializeApp } from "firebase/app";
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut} from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyBIvbKtwaqa1YvR-yNVTtu0-4ckb3CW1R8",
    authDomain: "physicalnavigator-9701c.firebaseapp.com",
    projectId: "physicalnavigator-9701c",
    storageBucket: "physicalnavigator-9701c.appspot.com",
    messagingSenderId: "751509479527",
    appId: "1:751509479527:web:800eac1d8eb7372b9774c2",
    measurementId: "G-ZHG2ZJC9TF"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get a reference to the auth service
const auth = getAuth(app);

export {auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut};