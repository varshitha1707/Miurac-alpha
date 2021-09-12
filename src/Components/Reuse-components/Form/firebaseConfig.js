import firebase from "firebase/app";
import 'firebase/firestore';
// import 'firebase/auth'
import 'firebase/analytics'



const firebaseConfig = {
    apiKey: "AIzaSyB2HmYYMMvwo2ZFyDEEeSkrsgXXg83vhM8",
    authDomain: "miurac.firebaseapp.com",
    databaseURL: "https://miurac.firebaseio.com",
    projectId: "miurac",
    storageBucket: "miurac.appspot.com",
    messagingSenderId: "558005497129",
    appId: "1:558005497129:web:c9ce77e0a0df507ec1db38"
  };
  

function firebaseInit() {
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    }
}
firebaseInit();
firebase.analytics()
const db = firebase.firestore()
// const firestore = firebase.firestore()
export default firebase;
export { db }