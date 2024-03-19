// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey:process.env.FIREBASE,
  authDomain: "codebyte-416411.firebaseapp.com",
  projectId: "codebyte-416411",
  storageBucket: "codebyte-416411.appspot.com",
  messagingSenderId: "383706683453",
  appId: "1:383706683453:web:1414ec3196ac71c0897254",
  measurementId: "G-W0QW20EFD4"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);