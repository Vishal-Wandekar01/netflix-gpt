// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCYpY3AzgdfEbhhs4DRDXrIAtSORKEQBGQ",
    authDomain: "netflixgpt-643f3.firebaseapp.com",
    projectId: "netflixgpt-643f3",
    storageBucket: "netflixgpt-643f3.appspot.com",
    messagingSenderId: "216587853359",
    appId: "1:216587853359:web:89c174c9b3629127cdf0da",
    measurementId: "G-QPBVWPVBD2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);