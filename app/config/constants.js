// Initialize Firebase
import firebase from 'firebase'

const config = {
  apiKey: 'AIzaSyDR-l1ESKuVr2zJQw3GDsghOHXWRKFjgn4',
  authDomain: 'dazzling-inferno-5038.firebaseapp.com',
  databaseURL: 'https://dazzling-inferno-5038.firebaseio.com',
  storageBucket: 'dazzling-inferno-5038.appspot.com',
  messagingSenderId: '1022672872870',
}

firebase.initializeApp(config)

export const ref = firebase.database().ref()
export const firebaseAuth = firebase.auth

export const usersDucksExpirationLength = 100000
export const userExpirationLength = 100000
