import firebase from "firebase/compat/app";
import 'firebase/compat/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyB9OihFB9dUFqMx9VT9W1f998lbfdTjvew",
  authDomain: "react-assignment-f65f7.firebaseapp.com",
  projectId: "react-assignment-f65f7",
  storageBucket: "react-assignment-f65f7.appspot.com",
  messagingSenderId: "462572566817",
  appId: "1:462572566817:web:94cfb06bc840b4b18ce660"
};

const app = firebase.initializeApp(firebaseConfig);

export default firebase

export { app }