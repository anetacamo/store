import React, { useState } from "react";
import Input from "./Input";
import { auth, createUserProfileDocument } from "../firebase/firebase.utils";
import "../main.scss";

//93!

const Signup = () => {
  const [credentials, setCredentials] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmedPassword: "",
  });
  const { displayName, email, password, confirmedPassword } = credentials;

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmedPassword) {
      alert("passwords dont match");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await createUserProfileDocument(user, { displayName });
      setCredentials({
        displayName: "",
        email: "",
        password: "",
        confirmedPassword: "",
      });
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCredentials({ ...credentials, [name]: value });
  };

  return (
    <div className="padding flex-auto signup-box">
      <div>
        <h1>Sign Up</h1>
        <p>
          Do not have an account?
          <br />
          Sign up with your email and password
        </p>
        <div className="line"></div>
      </div>

      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="displayName"
          value={displayName}
          onChange={handleChange}
          label="display name"
        />
        <Input name="email" value={email} onChange={handleChange} />
        <Input name="password" value={password} onChange={handleChange} />
        <Input
          type="password"
          name="confirmedPassword"
          label="password once again"
          value={confirmedPassword}
          onChange={handleChange}
        />
        <div className="button-container">
          <button type="submit">Sign Up</button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
