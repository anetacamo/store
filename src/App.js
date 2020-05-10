import React from "react";
import "./main.scss";
import { connect } from "react-redux";

import About from "./components/screens/About";
import Homepage from "./components/screens/Homepage";
import Signin from "./components/screens/Signin";
import Shop from "./components/screens/Shop";
import Checkout from "./components/Checkout";
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

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cartItems: [],
      collections: [],
      isLoading: true,
    };
  }

  // FIREBASE GOOGLE SIGNUP
  // inside componentDidMount we used to fetch
  // Now once code calls fetch it wont fetch again untill that function (cDM) is called again!
  // BUT now we do not wanna remount our app!
  // we only wanna know when the user signs in
  // auth object allows that
  // this connection is always open from when the compent Mounts
  // THEREFORE WE NEED to close this open connection when components unMounts
  unsubscribeFromAuth = null;
  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
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

    const collectionRef = firestore.collection("colections");
    this.unsubscribeFromSnapshot = collectionRef.onSnapshot(
      async (snapShot) => {
        const collectionMap = convertCollections(snapShot);
        const collectionArray = Object.values(collectionMap);
        this.setState({ collections: collectionArray });
        this.setState({ isLoading: false });
      }
    );
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  // FIREBASE GOOGLE SIGNUP END

  addItemToCart = (item) => {
    const cartItems = this.state.cartItems;
    const existingCartItem = cartItems.find(
      (cartItem) => cartItem.id === item.id
    );

    if (existingCartItem) {
      const cartItemsWithExisting = cartItems.map((cartItem) =>
        cartItem.id === item.id
          ? { ...item, quantity: cartItem.quantity + 1 }
          : cartItem
      );
      this.setState({ cartItems: cartItemsWithExisting });
    } else {
      this.setState({ cartItems: [...cartItems, { ...item, quantity: 1 }] });
    }
  };

  removeItemFromCart = (item) => {
    const cartItems = this.state.cartItems;
    const itemToDeduct = cartItems.find((cartItem) => cartItem.id === item.id);
    if (itemToDeduct.quantity === 1) {
      this.deleteItemFromCart(item);
    } else {
      const updatedCartItems = cartItems.map((cartItem) =>
        cartItem.id === item.id
          ? { ...item, quantity: cartItem.quantity - 1 }
          : cartItem
      );
      this.setState({ cartItems: updatedCartItems });
    }
  };

  deleteItemFromCart = (item) => {
    const cartItems = this.state.cartItems;
    const updatedCartItems = cartItems.filter(
      (cartItem) => cartItem.id !== item.id
    );
    this.setState({ cartItems: updatedCartItems });
  };

  render() {
    return (
      //an empty url is just slash, homepage will be rendered.
      <Router>
        <div className="App">
          <Header cartItems={this.state.cartItems} />

          <div className="container">
            <Switch>
              <Route
                path="/shop"
                render={(props) => (
                  <Shop
                    {...props}
                    onItemAdd={this.addItemToCart.bind(this)}
                    cartItems={this.state.cartItems}
                    collections={this.state.collections}
                    isLoading={this.state.isLoading}
                  />
                )}
              />
              <Route path="/about" component={About} />
              <Route
                exact
                path="/signin"
                render={() =>
                  this.props.currentUser ? <Redirect to="/" /> : <Signin />
                }
              />
              <Route
                path="/checkout"
                render={(props) => (
                  <Checkout
                    {...props}
                    onItemAdd={this.addItemToCart.bind(this)}
                    cartItems={this.state.cartItems}
                    onItemRemove={this.removeItemFromCart.bind(this)}
                    onItemDelete={this.deleteItemFromCart.bind(this)}
                  />
                )}
              />
              <Route
                path="/"
                render={(props) => (
                  <Homepage
                    {...props}
                    collections={this.state.collections}
                    isLoading={this.state.isLoading}
                  />
                )}
              />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

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
