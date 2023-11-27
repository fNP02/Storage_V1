// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
//storage
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDcnpOKMiGGPySKe4goOmqN9215XeCeyDY",
  authDomain: "storagev1-46233.firebaseapp.com",
  projectId: "storagev1-46233",
  storageBucket: "storagev1-46233.appspot.com",
  messagingSenderId: "31423304904",
  appId: "1:31423304904:web:0ab9a9cfc6f0bde56481fd",
  measurementId: "G-EV1G3F4XBY",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

//storage
export const storage = getStorage(app)

