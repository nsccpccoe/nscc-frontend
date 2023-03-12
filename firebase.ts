// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, connectFirestoreEmulator } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth, connectAuthEmulator } from "firebase/auth";
import { getFunctions } from "firebase/functions";

const firebaseConfig = {
  apiKey: "AIzaSyAMpZaQSX1yNmPNv7nwNG45mGpbOOl1vGc",
  authDomain: "nsccpccoe.firebaseapp.com",
  projectId: "nsccpccoe",
  storageBucket: "nsccpccoe.appspot.com",
  messagingSenderId: "248065630737",
  appId: "1:248065630737:web:463d54973d707984cb07b0",
  measurementId: "G-0NRS6Y223J",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const db = getFirestore(app);
const storage = getStorage(app);

// if (
//   typeof location !== "undefined" &&
//   (location.hostname === "localhost" || location.hostname === "127.0.0.1")
// ) {
//   connectAuthEmulator(auth, "http://127.0.0.1:9099");
//   connectFirestoreEmulator(db, "localhost", 8080);
// }

export { auth, db, storage};