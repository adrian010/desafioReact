import firebase from 'firebase/app';
import 'firebase/auth'

const firebaseConfig ={

    apiKey: "AIzaSyA3FSf8z3mvhilui3nzFH9pXuOreAJEXFE",
    authDomain: "reactfirebasetest-8d804.firebaseapp.com",
    projectId: "reactfirebasetest-8d804",
    storageBucket: "reactfirebasetest-8d804.appspot.com",
    messagingSenderId: "74786403550",
    appId: "1:74786403550:web:1119b274d4753fc450fe4f"

};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;