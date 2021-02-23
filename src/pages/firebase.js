import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCsNk49nHsl5c0EtY43FY5lpqRlyjJysQI",
  authDomain: "store-7a73b.firebaseapp.com",
  databaseURL: "https://store-7a73b.firebaseio.com",
  projectId: "store-7a73b",
  storageBucket: "store-7a73b.appspot.com",
  messagingSenderId: "702745997873",
  appId: "1:702745997873:web:16500c5eb77b2b41badb10",
  measurementId: "G-DQ0Y138QZS"
});

const auth = firebase.auth();

export { auth };