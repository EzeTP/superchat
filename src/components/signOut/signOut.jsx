import React from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const signOut = () => {
  const auth = firebase.auth();

  return (
    auth.currentUser && (
      <button className="sign-out" onClick={() => auth.signOut()}>
        Sign Out
      </button>
    )
  );
};

export default signOut;
