// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBu9v59Qnd97sWKQg04U1_70t_29Ue17gg",
  authDomain: "netflix-gpt-681f0.firebaseapp.com",
  projectId: "netflix-gpt-681f0",
  storageBucket: "netflix-gpt-681f0.appspot.com",
  messagingSenderId: "950577875902",
  appId: "1:950577875902:web:7d7ab77a146bcb64f547ef",
  measurementId: "G-L4KXQ045KL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();