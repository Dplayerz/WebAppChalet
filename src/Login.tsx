/*import React from "react";
import { auth, provider } from "./Firebase-config";
import { signInWithPopup } from "firebase/auth";

function Login({ setIsAuth }) {
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      localStorage.setItem("isAuth", true);
      setIsAuth(true);
    });
  };
  return (
    <div className="loginPage">
      Login
      <p>Si tu t'appelle pas xavier, Decalisse</p>
      <button className="login-with" onClick={signInWithGoogle}>
        {" "}
        Sign in with google{" "}
      </button>
    </div>
  );
}

export default Login;*/
