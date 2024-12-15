// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBlEDJRaOhfXMOz-hHh0-XvlavdAzcldN4",
    authDomain: "quantorium-91fa3.firebaseapp.com",
    projectId: "quantorium-91fa3",
    storageBucket: "quantorium-91fa3.firebasestorage.app",
    messagingSenderId: "1019220867678",
    appId: "1:1019220867678:web:e5d83c6072baef9488d2cf"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
export const db = getFirestore(app)


export { auth}