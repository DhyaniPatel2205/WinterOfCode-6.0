// Import necessary Firebase modules and initialize Firebase
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyDfG6GI3hyUpeLeT4PKTW85-01qXRlBSlg",
    authDomain: "winterofcode-bb916.firebaseapp.com",
    projectId: "winterofcode-bb916",
    storageBucket: "winterofcode-bb916.appspot.com",
    messagingSenderId: "1078720641296",
    appId: "1:1078720641296:web:57272cb4e0218d32264d95",
    measurementId: "G-ER32L643RH"
  };

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const analytics = getAnalytics(firebaseApp);

export { firebaseApp, auth };
