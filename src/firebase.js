

  import firebase from "firebase";
  const firebaseApp = firebase.initializeApp({
  
        apiKey: "AIzaSyBwvxjvYRt-6ICgCtydi_y83jlJ319NbwY",
        authDomain: "todo-app-a1f03.firebaseapp.com",
        projectId: "todo-app-a1f03",
        storageBucket: "todo-app-a1f03.appspot.com",
        messagingSenderId: "341808356346",
        appId: "1:341808356346:web:2f9a8e7b2cb500481ae243",
        measurementId: "G-2S0HBTXBN6"

  });

  const db = firebaseApp.firestore();
  export default db;