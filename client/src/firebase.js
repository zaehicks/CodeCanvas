// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "codecanvas-571cd.firebaseapp.com",
  projectId: "codecanvas-571cd",
  storageBucket: "codecanvas-571cd.appspot.com",
  messagingSenderId: "223949844992",
  appId: "1:223949844992:web:346ffa717562beed2e5ee5"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
