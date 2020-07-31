import * as firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOM,
    databaseURL: process.env.REACT_APP_URL,
    projectId: process.env.REACT_APP_ID,
    storageBucket: process.env.REACT_APP_STRG,
    messagingSenderId: process.env.REACT_APP_MSG,
    appId: process.env.REACT_APP_APP_ID
  };

firebase.initializeApp(firebaseConfig);
export const firestore = firebase.firestore();
export const storage = firebase.storage();
