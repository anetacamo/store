import React from "react";

import Input from "../components/Input";
import Signup from "../components/Signup";

import { signInWithGoogle } from "../firebase/firebase.utils";

import "../main.scss";

class Signin extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      email: "",
      password: "",
    });
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="flex-center">
        <div className="align-right padding bg-gray">
          <div>
            <h1>Log in</h1>
            <p>I have an account.</p>
            <p>Sign up with your email and password</p>
            <div className="line" style={{ marginLeft: "auto" }}></div>
          </div>

          <form onSubmit={this.handleSubmit}>
            <Input
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
            <Input
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
            <div>
              <button type="submit">Log in</button>
              <button
                className="button-pink"
                onClick={signInWithGoogle}
                style={{
                  marginRight: "0",
                  backgroundColor: "white",
                }}
              >
                Log in with Google
              </button>
            </div>
          </form>
        </div>
        <Signup />
      </div>
    );
  }
}

export default Signin;
