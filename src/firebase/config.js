import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDbWV_Go098gl3_KmnaW8FqTpInNEHlzYs",
  authDomain: "fotograf-bce98.firebaseapp.com",
  projectId: "fotograf-bce98",
  storageBucket: "fotograf-bce98.appspot.com",
  messagingSenderId: "625613556222",
  appId: "1:625613556222:web:32217b58557acdb7fad8af"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };