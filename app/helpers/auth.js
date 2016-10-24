import { ref, firebaseAuth } from 'config/constants'

export default function auth () {
   const provider = new firebaseAuth.GoogleAuthProvider()
   return firebaseAuth().signInWithRedirect(provider)
  //return firebaseAuth().createUserWithEmailAndPassword('ryan7falcon@gmail.com', 'password')
  //return firebaseAuth().signInWithEmailAndPassword('ryan7falcon@gmail.com', 'password')
}

export function checkIfAuthed (store) {
  return store.getState().users.isAuthed
}

export function logout () {
  return firebaseAuth().signOut()
}

export function saveUser (user) {
  return ref.child(`users/${user.uid}`)
    .set(user)
    .then(() => user)
}
