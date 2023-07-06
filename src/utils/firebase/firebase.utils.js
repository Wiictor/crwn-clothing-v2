import { initializeApp } from "firebase/app";
import { 
  getAuth, 
  signInWithRedirect, 
  signInWithPopup, 
  GoogleAuthProvider 
} from 'firebase/auth';
import {
  getFirestore,
  doc,
  getDoc,
  setDoc
}  from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBHQtWrS7aqwGKvW-9W4QrfpdKBZbtSb9Q",
  authDomain: "crwn-db-49280.firebaseapp.com",
  projectId: "crwn-db-49280",
  storageBucket: "crwn-db-49280.appspot.com",
  messagingSenderId: "941628963191",
  appId: "1:941628963191:web:01ff3a0f70fb31e7ce8972"
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth =  async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid);

  console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot);
  console.log(userSnapshot.exists());

  //if user data does not exist
  //create / set the document with the data from userAuth in my collection
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt
      })
    } catch(error) {
      console.log('error creating the user', error.message);
    }
  }

  //return userDocRef
  return userDocRef;
};