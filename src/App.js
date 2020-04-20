import React from "react";
import "./main.scss";

import About from "./components/About";
import Homepage from "./components/Homepage";
import Checkout from "./components/Checkout";
import Header from "./components/Header";
import Signin from "./components/Signin";
import Shop from "./components/Shop";

import { Route, Switch } from "react-router-dom";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentuser: null,
      cartItems: [],
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
      console.log("only one item");
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
    console.log(updatedCartItems);
    this.setState({ cartItems: updatedCartItems });
  };

  render() {
    return (
      //an exact empty url is just slash, homepage will be rendered.
      <div className="App">
        <Header
          currentuser={this.state.currentuser}
          cartItems={this.state.cartItems}
        />

        <div className="container">
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route
              exact
              path="/shop"
              component={() => (
                <Shop
                  onItemAdd={this.addItemToCart.bind(this)}
                  cartItems={this.state.cartItems}
                />
              )}
            />
            <Route exact path="/about" component={About} />
            <Route exact path="/signin" component={Signin} />
            <Route
              exact
              path="/checkout"
              component={() => (
                <Checkout
                  onItemAdd={this.addItemToCart.bind(this)}
                  cartItems={this.state.cartItems}
                  onItemRemove={this.removeItemFromCart.bind(this)}
                  onItemDelete={this.deleteItemFromCart.bind(this)}
                />
              )}
            />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
