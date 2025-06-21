// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDvdhm0XFgb-EiWlfe2xfWbEFR8P_CRoRA",
  authDomain: "expense-tracker-d5b96.firebaseapp.com",
  projectId: "expense-tracker-d5b96",
  storageBucket: "expense-tracker-d5b96.firebasestorage.app",
  messagingSenderId: "60580595021",
  appId: "1:60580595021:web:d7a0c492fc82bc21a8a304"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);