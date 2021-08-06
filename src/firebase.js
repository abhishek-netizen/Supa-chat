import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyBdjNzf5iUBJ34Tu2X1MBilYEANJcgR_zs",
    authDomain: "supa-chat-adba4.firebaseapp.com",
    projectId: "supa-chat-adba4",
    storageBucket: "supa-chat-adba4.appspot.com",
    messagingSenderId: "412261215607",
    appId: "1:412261215607:web:deca41d239664259430572",
    measurementId: "G-CPFKB5NSSF"
};
  
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };