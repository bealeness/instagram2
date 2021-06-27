import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAMl0ryeOJ_y34mvm_1f0Vl0YEWlQvq3AA",
    authDomain: "instagram2-9b3e6.firebaseapp.com",
    projectId: "instagram2-9b3e6",
    storageBucket: "instagram2-9b3e6.appspot.com",
    messagingSenderId: "834379857564",
    appId: "1:834379857564:web:19ac0d906fc09b45bfb759",
    measurementId: "G-MEMRK6Q1Z2"
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;


export { firebase, FieldValue };