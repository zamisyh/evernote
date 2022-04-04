import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
    authDomain: "evernote-f9946.firebaseapp.com",
    projectId: "evernote-f9946",
    storageBucket: "evernote-f9946.appspot.com",
    messagingSenderId: "105930331629",
    appId: "1:105930331629:web:0959a6c5bcd425357cc3e4"
  
  };

firebase.initializeApp(firebaseConfig);

export default firebase