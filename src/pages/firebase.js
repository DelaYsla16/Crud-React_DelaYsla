
import firebase from "firebase/compat/app";
import "firebase/compat/database";

const firebaseConfig = {
  apiKey: "AIzaSyAG0zUxtXSvty4UA0vbEKHA9ovdlPizbbA",
  authDomain: "crud-react-4ea9b.firebaseapp.com",
  projectId: "crud-react-4ea9b",
  storageBucket: "crud-react-4ea9b.appspot.com",
  messagingSenderId: "538329876382",
  appId: "1:538329876382:web:7368818a21c79825d6388f",
  measurementId: "G-YZV7E4P3YN"
};

firebase.initializeApp(firebaseConfig);
const fireDb= firebase.database().ref();;
export default fireDb;
