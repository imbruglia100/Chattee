// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB6rrhRGS8dZxFNGxnTUilU1T9TICbDe5I",
  authDomain: "chattee-4efe1.firebaseapp.com",
  projectId: "chattee-4efe1",
  storageBucket: "chattee-4efe1.appspot.com",
  messagingSenderId: "165311163127",
  appId: "1:165311163127:web:2b6263b6cee97fd5e301f2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
