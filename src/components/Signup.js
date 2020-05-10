import React from "react";
import Input from "./Input";
import { auth, createUserProfileDocument } from "../firebase/firebase.utils";
import "../main.scss";

class Signup extends React.Component {
  constructor() {
    super();
    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmedPassword: "",
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const { displayName, email, password, confirmedPassword } = this.state;
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
      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmedPassword: "",
      });
    } catch (error) {
      console.error(error);
    }
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { displayName, email, password, confirmedPassword } = this.state;
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

        <form onSubmit={this.handleSubmit}>
          <Input
            type="text"
            name="displayName"
            value={displayName}
            onChange={this.handleChange}
            label="display name"
          />
          <Input name="email" value={email} onChange={this.handleChange} />
          <Input
            name="password"
            value={password}
            onChange={this.handleChange}
          />
          <Input
            type="password"
            name="confirmedPassword"
            label="password once again"
            value={confirmedPassword}
            onChange={this.handleChange}
          />
          <div className="button-container">
            <button type="submit">Sign Up</button>
          </div>
        </form>
      </div>
    );
  }
}

export default Signup;
