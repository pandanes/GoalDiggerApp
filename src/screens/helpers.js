import * as firebase from 'firebase';

// Initialize Firebase
export const firebaseConfig = {
  apiKey: "AIzaSyByUO55buLHoOtxgvZNzX_b-4lIHzNSgPM",
  authDomain: "goaldigger-2b520.firebaseapp.com",
  databaseURL: "https://goaldigger-2b520.firebaseio.com",
  projectId: "goaldigger-2b520",
  storageBucket: "goaldigger-2b520.appspot.com",
  messagingSenderId: "587929300757"
};
export const init = firebase.initializeApp(firebaseConfig);

export const database = firebase.database();

//Access node goals in database
export const ref = database.ref('goals')