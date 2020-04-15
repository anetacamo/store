import React from "react";
import "./main.scss";
import Homepage from "./components/Homepage";
import Shop from "./components/Shop";
import About from "./components/About";
import Header from "./components/Header";
import Signin from "./components/Signin";
import { Route, Switch } from "react-router-dom";
import { auth } from "./firebase/firebase.utils";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentuser: null,
    };
  }

  // FIREBASE GOOGLE SIGNUP
  //inside componentDidMount we used to fetch
  //Now once code calls fetch it wont fetch again untill that function (cDM) is called again!
  // BUT now we do not wanna remount our app!
  // we only wanna know when the user signs in
  // auth object allows that!
  // this connection is always open from when the compent Mounts!
  // THEREFORE WE NEED to close this open connection when components unMounts!
  unsubscribeFromAuth = null;

  componentDidMount() {
    auth.onAuthStateChanged((user) => {
      this.setState({ currentuser: user });
      console.log(user);
    });
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  // FIREBASE GOOGLE SIGNUP END

  render() {
    return (
      //an exact empty url is just slash, homepage will be rendered.
      <div className="App">
        <Header currentUser={this.state.currentuser} />

        <div className="container">
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/shop" component={Shop} />
            <Route exact path="/about" component={About} />
            <Route exact path="/signin" component={Signin} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
