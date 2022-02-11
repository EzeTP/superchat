import React from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const ChatMessage = (props) => {
  const auth = firebase.auth();

  const { text, uid, photoURL } = props.mesagge;

  const messageClass = uid === auth.currentUser.uid ? "sent" : "received";

  return (
    <>
      <div className={`message ${messageClass}`}>
        <img
          src={
            photoURL || "https://api.adorable.io/avatars/23/abott@adorable.png"
          }
        />
        <p>{text}</p>
      </div>
    </>
  );
};

export default ChatMessage;
