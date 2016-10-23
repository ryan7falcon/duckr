// Initialize Firebase
import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyDfjuOrs-9GZS1vH8zosJhlQHP5T3sqWP8",
    authDomain: "duckr-app-7feb7.firebaseapp.com",
    databaseURL: "https://duckr-app-7feb7.firebaseio.com",
    storageBucket: "duckr-app-7feb7.appspot.com",
    messagingSenderId: "966949379934",
    navigateFallbackWhitelist: "[ /^\/home\//, /^\/other\// ]"
}

firebase.initializeApp(config)

export const ref = firebase.database().ref()
export const firebaseAuth = firebase.auth
