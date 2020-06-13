import { createRequire } from "https://deno.land/std/node/module.ts";
const require = createRequire(import.meta.url);
const firebase = require("firebase");

//import firebase from 'https://cdn.pika.dev/firebase@^7.15.0';
//import {} from "https://www.gstatic.com/firebasejs/5.6.0/firebase-auth.js";
//import "https://www.gstatic.com/firebasejs/5.6.0/firebase-firestore.js";
//import "https://www.gstatic.com/firebasejs/5.6.0/firebase-functions.js";
// Initialize Firebase
var config = {
    apiKey: "AIzaSyCrSR0aquvWFH-dXyG_7tv_S8QkCW1dWT4",
    authDomain: "algoimplement.firebaseapp.com",
    databaseURL: "https://algoimplement.firebaseio.com",
    projectId: "algoimplement",
};
firebase.initializeApp(config);

// make auth and firestore references
const auth = firebase.auth();
const db = firebase.firestore();
const functions = firebase.functions();

// update firestore settings
db.settings({ timestampsInSnapshots: true });

console.log(db.collection('users').get());
