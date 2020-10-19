import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyC0Bp_ipGeTcbReHcrpr7Zm3432Ib26bjg",
    authDomain: "project-planer-42ca1.firebaseapp.com",
    databaseURL: "https://project-planer-42ca1.firebaseio.com",
    projectId: "project-planer-42ca1",
    storageBucket: "project-planer-42ca1.appspot.com",
    messagingSenderId: "1053513584750",
    appId: "1:1053513584750:web:205d2e19de2877b991567f",
    measurementId: "G-EH46SW6SMH"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize Firestore
firebase.firestore();

// Able to use it to interact with our project
export default firebase;