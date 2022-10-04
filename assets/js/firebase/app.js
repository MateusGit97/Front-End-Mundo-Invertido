// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBrA6RodIzdztQIECF_lkCH9vWp67ArV7A",
    authDomain: "database-mundo-invertido.firebaseapp.com",
    projectId: "database-mundo-invertido",
    storageBucket: "database-mundo-invertido.appspot.com",
    messagingSenderId: "7358418313",
    appId: "1:7358418313:web:1903e34b7b8ee3c9caa558"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export default app