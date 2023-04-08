import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDGuBNCm_mLocS_0_uunWRQuBKr7k31ArM",
  authDomain: "callme-6ac7d.firebaseapp.com",
  projectId: "callme-6ac7d",
  storageBucket: "callme-6ac7d.appspot.com",
  messagingSenderId: "75296236471",
  appId: "1:75296236471:web:1b7ad421380e8577993e32"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
