import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyBW78s8D12Wl7mk8PYP-yoFKOopKSZ2MH8",
    authDomain: "woleekanola-48a60.firebaseapp.com",
    databaseURL: "https://woleekanola-48a60.firebaseio.com",
    projectId: "woleekanola-48a60",
    storageBucket: "woleekanola-48a60.appspot.com",
    messagingSenderId: "72886914677"
  };

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const db = firebase.database();
const auth = firebase.auth();

export {
  db,
  auth,
};