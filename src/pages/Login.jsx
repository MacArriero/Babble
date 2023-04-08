import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import {signInWithPopup, GoogleAuthProvider} from "firebase/auth";
import { auth, db } from "../firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";

const Login = () => {
  const [err, setErr] = useState(false);
  const navigate = useNavigate();

  const useSignInWithGoogle = async (e) => {
    e.preventDefault();
    const provider = new GoogleAuthProvider();
    const res = await signInWithPopup(auth, provider);

    const docRef = doc(db, "users", res.user.uid);
    const docSnap = await getDoc(docRef);

    if (!docSnap.exists()) {
      try {
        //create user on firestore
        await setDoc(doc(db, "users", res.user.uid), {
          uid: res.user.uid,
          displayName: res.user.displayName,
          email: res.user.email,
          photoURL: res.user.photoURL,
        });
  
        //create empty user chats on firestore
        await setDoc(doc(db, "userChats", res.user.uid), {});
      } catch (err) {
        setErr(true);
      }
    }     
    navigate("/");
  }

  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Babble</span>
        <span className="title">Welcome! Please login</span>
        <form onSubmit={useSignInWithGoogle}>
          <button>Sign in</button>
          {err && <span>Something went wrong</span>}
        </form>
      </div>
    </div>
   
  )
};

export default Login;
