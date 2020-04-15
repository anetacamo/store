import React from "react";
import "../main.scss";
import Input from "../components/Input";
import { signInWithGoogle } from "../firebase/firebase.utils";

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
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="flex-center">
        <div className="Signin align-right padding bg-gray">
          <div>
            <h1>Log in</h1>
            <div className="line"></div>
            <h3>with your mail and password</h3>
          </div>

          <form onSubmit={this.handleSubmit}>
            <Input
              title="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
            <Input
              title="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
            <div>
              <button>Log in</button>
              <button class="button-pink" onClick={signInWithGoogle}>
                Log in with Google
              </button>
            </div>
          </form>
        </div>
        <div className="Signin padding">
          <div>
            <h1>Sign in</h1>
            <div className="line"></div>
            <h3>with your mail and password</h3>
          </div>

          <form onSubmit={this.handleSubmit}>
            <Input
              title="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
            <Input
              title="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
            <div>
              <button>Sign in</button>
              <button class="button-gray">Sign in with Google</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Signin;
