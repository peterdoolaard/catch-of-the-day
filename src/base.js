import Rebase from 're-base'
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCsmboB6C84kfc5tws4M3rIj_i6TBwBCfA",
  authDomain: "catch-of-the-day-1f46b.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-1f46b-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "catch-of-the-day-1f46b",
  storageBucket: "catch-of-the-day-1f46b.appspot.com",
  messagingSenderId: "133659519857",
  appId: "1:133659519857:web:3020caac69ceb0bd7f64d0"
})

const base = Rebase.createClass(firebaseApp.database())

export { firebaseApp }

export default base
