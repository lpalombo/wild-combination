import firebase from 'firebase';
const config = {
  apiKey: "AIzaSyAaBtfKB9zO9UolePvDAdltp3ThGc3uzNU",
  authDomain: "wild-combination.firebaseapp.com",
  databaseURL: "https://wild-combination.firebaseio.com",
  projectId: "wild-combination",
  storageBucket: "wild-combination.appspot.com",
  messagingSenderId: "1095336618049"
};

firebase.initializeApp(config);
export default firebase;
