import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'yourApiKey',
  authDomain: 'yourAppName.firebaseapp.com',
  databaseURL: 'https://your-app-name-default-rtdb.firebaseio.com',
  projectId: 'your-app-id',
  storageBucket: 'your-app-id.appspot.com',
  messagingSenderId: 'yourMessagingSenderId',
  appId: 'yourAppId'
}

firebase.initializeApp(firebaseConfig)

const db = firebase.firestore()

export default db