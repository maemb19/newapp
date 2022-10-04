// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAvpi95k4vAiMDFYzQ6Y1Bh5lAjlY4ro90",
  authDomain: "rj-37545.firebaseapp.com",
  projectId: "rj-37545",
  storageBucket: "rj-37545.appspot.com",
  messagingSenderId: "915381510003",
  appId: "1:915381510003:web:21b6c15a52f2b36e746f06",
  measurementId: "G-EXDDJHQ69Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);