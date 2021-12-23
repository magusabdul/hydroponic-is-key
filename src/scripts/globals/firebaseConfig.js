// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAOwv0ry7v9-sHb57nKoXxtulbZRKIufRs",
  authDomain: "hydroponic-is-key.firebaseapp.com",
  projectId: "hydroponic-is-key",
  storageBucket: "hydroponic-is-key.appspot.com",
  messagingSenderId: "676196382927",
  appId: "1:676196382927:web:a3c397433b4d0cde5b9fba",
  measurementId: "${config.measurementId}"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);