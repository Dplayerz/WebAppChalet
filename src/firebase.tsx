// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

import "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAB9C-BCUm7cq708O4wPdcVkqY7_iAU4JI",
  authDomain: "databasexp-1d92f.firebaseapp.com",
  projectId: "databasexp-1d92f",
  storageBucket: "databasexp-1d92f.appspot.com",
  messagingSenderId: "899864104796",
  appId: "1:899864104796:web:5f03eb6903f4b6c4637b99",
  measurementId: "G-E7CLNZ1D37",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
