import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBZdc9w4MsYOkWP5-X7WgKLrZGChm-yPkY",
    authDomain: "netflix-clone-4e2c7.firebaseapp.com",
    projectId: "netflix-clone-4e2c7",
    storageBucket: "netflix-clone-4e2c7.appspot.com",
    messagingSenderId: "648885065139",
    appId: "1:648885065139:web:d5643d77899f4a649827c6"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {auth};
export default db;