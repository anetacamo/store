import React, { useState, useEffect } from "react";
import "./main.scss";
import { connect } from "react-redux";

import About from "./components/screens/About";
import Homepage from "./components/screens/Homepage";
import Signin from "./components/screens/Signin";
import Shop from "./components/screens/Shop";
import Checkout from "./components/screens/Checkout";
import Header from "./components/Header";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import {
  auth,
  createUserProfileDocument,
  firestore,
  convertCollections,
} from "./firebase/firebase.utils";
import { setCurrentUser } from "./redux/user/user.actions";

const App = ({ currentUser, setCurrentUser }) => {
  const [isLoading, setLoading] = useState(true);
  const [collections, setCollections] = useState([]);

  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        // here we are listening to any changes to user data;
        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      }
      // when the used logs out, we set a userAuth to null
      setCurrentUser(userAuth);
    });
    //here we will listen to snapshot. We are subscribing to collections
    const unsubscribeFromCollections = firestore
      .collection("colections")
      .onSnapshot(async (snapShot) => {
        const collectionMap = convertCollections(snapShot);
        const collectionArray = Object.values(collectionMap);
        setCollections(collectionArray);
        setLoading(false);
      });
    // useEffect - a cleanup function - fired when ComponentWillUnmount!
    // we unsubscribe here! bye
    return () => {
      unsubscribeFromAuth();
      unsubscribeFromCollections();
    };
    // here if we pass the empty array we only intialize the useEffect when the component is Mounted plus since return fnc is mentioned also when it unMounts.
  }, [setCurrentUser]);

  // FIREBASE GOOGLE SIGNUP
  // inside componentDidMount we used to fetch
  // Now once code calls fetch it wont fetch again untill that function (cDM) is called again!
  // BUT now we do not wanna remount our app!
  // we only wanna know when the user signs in
  // auth object allows that
  // this connection is always open from when the compent Mounts
  // THEREFORE WE NEED to close this open connection when components unMounts

  return (
    //an empty url is just slash, homepage will be rendered.
    <Router>
      <div className="App">
        <Header />

        <div className="container">
          <Switch>
            <Route
              path="/shop"
              render={(props) => <Shop {...props} collections={collections} />}
            />
            <Route path="/about" component={About} />
            <Route
              exact
              path="/signin"
              render={() => (currentUser ? <Redirect to="/" /> : <Signin />)}
            />
            <Route
              path="/checkout"
              render={(props) => <Checkout {...props} />}
            />
            <Route
              path="/"
              render={(props) => (
                <Homepage
                  {...props}
                  collections={collections}
                  isLoading={isLoading}
                />
              )}
            />
          </Switch>
        </div>
      </div>
    </Router>
  );
};

//the first agument is null, we do not need any state from our reducer here.
//second arg. is a function(mapDispachToProps) we get a dispactch and return an object where the prop name will be any name that will dispatches the new action thar we pass (set Current User)
//dispach is like "whatever you passing me dude, is going to be an action object that im gonna pass to every reducer"
const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser,
});

const mapDispachToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispachToProps)(App);
