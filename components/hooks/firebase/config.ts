import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import "firebase/auth"
// const firebaseConfig = {
//     apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
//     authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
//     projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
//     storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
//     messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
//     appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
//     measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID
// };
const firebaseConfig = {
    apiKey: "AIzaSyC5DXRGKC_gOeF3PZCKXAcc3MrjJuHZpG4",
    authDomain: "komu-arcade-2024.firebaseapp.com",
    projectId: "komu-arcade-2024",
    storageBucket: "komu-arcade-2024.appspot.com",
    messagingSenderId: "161545577450",
    appId: "1:161545577450:web:424705dd452507c0500893",
    measurementId: "G-7FBBZN22R9"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);
const db = getFirestore(app);

const uuidF = auth.currentUser?.uid;

export { auth, db, uuidF }
