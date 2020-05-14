import React, { useState } from "react";
import "../../main.scss";

import Input from "../Input";
import Signup from "../Signup";

import { auth, signInWithGoogle } from "../../firebase/firebase.utils";

const Signin = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const { email, password } = credentials;
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await auth.signInWithEmailAndPassword(email, password);
      setCredentials({ email: email, password: password });
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCredentials({ ...credentials, [name]: value });
  };

  return (
    <div className="flex-center flex-wrap">
      <div className="bg-gray login-box">
        <div>
          <h1>Log in</h1>
          <p>
            I have an account.
            <br />
            Sign up with your email and password
          </p>
          <div className="line" style={{ marginLeft: "auto" }}></div>
        </div>

        <form onSubmit={handleSubmit}>
          <Input name="email" value={email} onChange={handleChange} />
          <Input name="password" value={password} onChange={handleChange} />
          <div className="button-container">
            <button type="submit">Log in</button>
            <button className="button-pink" onClick={signInWithGoogle}>
              Log in with Google
            </button>
          </div>
        </form>
      </div>
      <Signup />
    </div>
  );
};

export default Signin;
