import { ref, firebaseAuth } from 'config/constants'
import firebase from 'firebase'

export default function auth () {
  const provider = new firebaseAuth.FacebookAuthProvider()
  return firebaseAuth().signInWithPopup(provider)
  // return firebase.auth().createUserWithEmailAndPassword('ryan7falcon@gmail.com', 'password')
}

export function checkIfAuthed (store) {
  return store.getState().isAuthed
}

export function logout () {
  return firebaseAuth().signout()
}

export function saveUser (user) {
  return ref.child(`users/${user.uid}`)
    .set(user)
    .then(() => user)
}
