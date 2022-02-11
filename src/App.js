import React from "react";
import "./App.css";
import SignIn from "./components/signIn/SignIn";
import SignOut from "./components/signOut/signOut";
import ChatRoom from "./components/chatroom/ChatRoom";
import ChatMessage from "./components/chatroom/ChatMsg/ChatMessage";

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";

firebase.initializeApp({
  apiKey: "AIzaSyBDV_0Yk8vzMmjF_jxSIx_OlZO7-7scEk8",
  authDomain: "chatwithreact-63d52.firebaseapp.com",
  projectId: "chatwithreact-63d52",
  storageBucket: "chatwithreact-63d52.appspot.com",
  messagingSenderId: "244897953748",
  appId: "1:244897953748:web:b04e0e756f7a69b5be8841",
  measurementId: "G-BEZ0DNQ3VF",
});

const auth = firebase.auth();
const firestore = firebase.firestore();

function App() {
  const [user] = useAuthState(auth);

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Chat</h1>
        <SignOut />
      </header>

      <section>{user ? <ChatRoom /> : <SignIn />}</section>
    </div>
  );
}

export default App;
