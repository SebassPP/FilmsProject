// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC0HyrCMTkSyJT3-sYiHz411GNuhm9ctZ8",
  authDomain: "filmblog-8c530.firebaseapp.com",
  projectId: "filmblog-8c530",
  storageBucket: "filmblog-8c530.appspot.com",
  messagingSenderId: "523758578812",
  appId: "1:523758578812:web:142719d76d9745f4b56df9",
  measurementId: "G-CRY719RFSS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);