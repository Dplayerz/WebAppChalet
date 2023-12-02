import "firebase/storage";
import * as firebase from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAB9C-BCUm7cq708O4wPdcVkqY7_iAU4JI",
  authDomain: "databasexp-1d92f.firebaseapp.com",
  projectId: "databasexp-1d92f",
  storageBucket: "databasexp-1d92f.appspot.com",
  messagingSenderId: "899864104796",
  appId: "1:899864104796:web:5f03eb6903f4b6c4637b99",
  measurementId: "G-E7CLNZ1D37",
};

export const app2 = firebase.initializeApp(firebaseConfig);
export const storage = getStorage(app2);
