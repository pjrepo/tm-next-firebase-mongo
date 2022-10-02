import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCskfElLZYKCko4Z0bjEI3_5RmX2cx-zHc',
  authDomain: 'todo-app-e95f8.firebaseapp.com',
  projectId: 'todo-app-e95f8',
  storageBucket: 'todo-app-e95f8.appspot.com',
  messagingSenderId: '14709228430',
  appId: '1:14709228430:web:7a4cf640fdea80676c5adf',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
