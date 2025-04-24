// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-457408.firebaseapp.com",
  projectId: "mern-estate-457408",
  storageBucket: "mern-estate-457408.firebasestorage.app",
  messagingSenderId: "1091757405917",
  appId: "1:1091757405917:web:433792ed48273e94888d34",
  measurementId: "G-VLQ0WYWV5P"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);