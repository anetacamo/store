import React from "react";
import "./main.scss";
import Homepage from "./components/Homepage";
import Shop from "./components/Shop";
import About from "./components/About";
import Header from "./components/Header";
import Signin from "./components/Signin";
import { Route, Switch } from "react-router-dom";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

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
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        // here we are listening to any changes to user data;
        userRef.onSnapshot((snapShot) => {
          this.setState({
            currentuser: {
              id: snapShot.id,
              ...snapShot.data(),
            }, //, () => console.log(something)
          });
          // console.log must go after the setState ONLY as a callback function.
          // setState is ASYNCHRONOUS - If we call other function rigth after the setState - setState may not be finsihed yet
          // So we have to pass it as a second function - as a parameter in SetState.
          // then state will call it after it is fully propagated
          console.log(this.state);
        });
      } else {
        // when the used logs out, we set a userAuth to null
        this.setState({ currentuser: userAuth });
      }
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
        <Header currentuser={this.state.currentuser} />

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
