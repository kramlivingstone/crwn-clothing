import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCbf-XuxVv-AxFRyqNAX5YZ2_JEzsc0biw",
    authDomain: "crwn-db-fc028.firebaseapp.com",
    databaseURL: "https://crwn-db-fc028.firebaseio.com",
    projectId: "crwn-db-fc028",
    storageBucket: "",
    messagingSenderId: "273551982386",
    appId: "1:273551982386:web:5106c5873a72d793"
};

firebase.initializeApp(config);


export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;


