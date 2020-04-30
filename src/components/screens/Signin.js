import React from "react";
import "../../main.scss";

import Input from "../Input";
import Signup from "../Signup";

import { auth, signInWithGoogle } from "../../firebase/firebase.utils";

class Signin extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    const { email, password } = this.state;
    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({
        email: "",
        password: "",
      });
    } catch (error) {
      console.log(error);
    }
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
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
  }
}

export default Signin;
