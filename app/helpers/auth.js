import { ref, firebaseAuth } from 'config/constants'

export default function auth () {
  // const provider = new firebaseAuth.FacebookAuthProvider()
  // return firebaseAuth().signInWithPopup(provider)
  return firebaseAuth().signInWithEmailAndPassword('ryan7falcon@gmail.com', 'password')
}

export function checkIfAuthed (store) {
  return store.getState().users.isAuthed
}

export function logout () {
  return firebaseAuth().signOut()
}

export function saveUser (user) {
  console.log(user)
  return ref.child(`users/${user.uid}`)
    .set(user)
    .then(() => user)
}
