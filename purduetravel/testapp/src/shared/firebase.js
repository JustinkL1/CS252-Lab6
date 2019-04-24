import * as firebase from 'firebase'
import 'firebase/auth';
import 'firebase/database';

const config = {
    apiKey: "AIzaSyAds6N5pOwi-0KdoK6L1P8Bbxb33VesK7c",
    authDomain: "cs252-lab6-ef3ff.firebaseapp.com",
    databaseURL: "https://cs252-lab6-ef3ff.firebaseio.com",
    projectId: "cs252-lab6-ef3ff",
    storageBucket: "cs252-lab6-ef3ff.appspot.com",
    messagingSenderId: "947179146273"
}
if (!firebase.apps.length) {
    firebase.initializeApp(config);
}

var firestore = firebase.firestore();
const settings = {timestampsInSnapshots: true};
firestore.settings(settings);


firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        console.log('This is the user: ', user)
    } else {
        console.log('There is no logged in user');
    }
});

const db = firebase.database();
const auth = firebase.auth();

const forumDB = firebase.database().ref('forum/');
const storageFR = firebase.storage();


export {
    db,
    auth,
    firebase,
    forumDB,
    storageFR,
    firestore,
};
