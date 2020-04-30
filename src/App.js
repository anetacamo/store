import React from "react";
import "./main.scss";

import About from "./components/screens/About";
import Homepage from "./components/screens/Homepage";
import Signin from "./components/screens/Signin";
import Shop from "./components/screens/Shop";
import Checkout from "./components/Checkout";
import Header from "./components/Header";
import SHOP_DATA from "./shopitems.js";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentuser: null,
      cartItems: [],
      collections: SHOP_DATA,
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
          <Header
            currentuser={this.state.currentuser}
            cartItems={this.state.cartItems}
          />

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
                  />
                )}
              />
              <Route path="/about" component={About} />
              <Route path="/signin" component={Signin} />
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
                  <Homepage {...props} collections={this.state.collections} />
                )}
              />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
