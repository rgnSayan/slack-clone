import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyCAuT68RSeJkhP0AH-1Glp_6EL3fGmznSE",
    authDomain: "react-slack-7128e.firebaseapp.com",
    projectId: "react-slack-7128e",
    storageBucket: "react-slack-7128e.appspot.com",
    messagingSenderId: "298666160676",
    appId: "1:298666160676:web:2338dd20157da873135eb1"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
