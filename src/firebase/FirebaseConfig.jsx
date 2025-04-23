// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA_iRQwD59TniICKSejCgDTFqzPSK8mtew",
  authDomain: "crescart-ef035.firebaseapp.com",
  projectId: "crescart-ef035",
  storageBucket: "crescart-ef035.firebasestorage.app",
  messagingSenderId: "618132197882",
  appId: "1:618132197882:web:008fcbe8f1dd3bbacf9443"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export { fireDB, auth }