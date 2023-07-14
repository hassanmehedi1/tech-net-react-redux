// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBMns78QL3j1AwNzEX8bAXBPsu-spHtCLA',
  authDomain: 'technet-353bb.firebaseapp.com',
  projectId: 'technet-353bb',
  storageBucket: 'technet-353bb.appspot.com',
  messagingSenderId: '999382633141',
  appId: '1:999382633141:web:5a221c2d0c66be1a48ccfc',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
