// Initialize Firebase
import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyDdmgY4tBSQik71KdcVsJ2mqZdp4jn5DQ8",
    authDomain: "test-project-7261c.firebaseapp.com",
    databaseURL: "https://test-project-7261c.firebaseio.com",
    storageBucket: "test-project-7261c.appspot.com",
    messagingSenderId: "921451786875"
}

firebase.initializeApp(config)

export const ref = firebase.database().ref()
export const firebaseAuth = firebase.auth
