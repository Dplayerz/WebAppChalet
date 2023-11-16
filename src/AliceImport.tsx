import {
  collection,
  addDoc,
  getDocs,
  onSnapshot,
  getFirestore,
} from "firebase/firestore";
import { useState, useEffect } from "react";
import { app } from "./firebase";

export const firestore = getFirestore(app);

export const AliceScore = collection(firestore, "Alice");
