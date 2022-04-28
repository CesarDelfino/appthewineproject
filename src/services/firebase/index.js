// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD5G89qdv2EMLmL7G0dSwnJAmR5mqMNyTo",
  authDomain: "ecommercetwp.firebaseapp.com",
  projectId: "ecommercetwp",
  storageBucket: "ecommercetwp.appspot.com",
  messagingSenderId: "947411264329",
  appId: "1:947411264329:web:89f4cdb5cc1bd7fc693098"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firestoreDb = getFirestore(app)