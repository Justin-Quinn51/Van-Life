import { initializeApp } from 'firebase/app';
import {
  getFirestore,
  collection,
  getDocs,
  getDoc,
  doc,
  query,
  where,
} from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: 'AIzaSyCWnFGMv8K9Sf5OkjiuZeifynZ0YUVsiLE',
  authDomain: 'vanlife-cbd3c.firebaseapp.com',
  projectId: 'vanlife-cbd3c',
  storageBucket: 'vanlife-cbd3c.appspot.com',
  messagingSenderId: '938457322180',
  appId: '1:938457322180:web:9e1d86232adf549b47ef91',
};

// eslint-disable-next-line no-unused-vars
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const vansCollectionRef = collection(db, 'vans');

export async function getVans() {
  const snapshot = await getDocs(vansCollectionRef);
  const vans = snapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));
  return vans;
}

export async function getVan(id) {
  const docRef = doc(db, 'vans', id);
  const snapshot = await getDoc(docRef);
  return {
    ...snapshot.data(),
    id: snapshot.id,
  };
}

export async function getHostVans() {
  const q = query(vansCollectionRef, where('hostId', '==', '123'));
  const snapshot = await getDocs(q);
  const vans = snapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));
  return vans;
}

export async function loginUser(creds) {
  const res = await fetch('/api/login', {
    method: 'post',
    body: JSON.stringify(creds),
  });

  const data = await res.json();

  if (!res.ok) {
    throw {
      message: data.message,
      statusText: res.statusText,
      status: res.status,
    };
  }

  return data;
}
