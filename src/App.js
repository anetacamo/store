import React from "react";
import "./main.scss";
import Homepage from "./components/Homepage";
import Shop from "./components/Shop";
import About from "./components/About";
import Header from "./components/Header";
import { Route, Switch } from "react-router-dom";

const App = () => {
  return (
    //an exact empty url is just slash, homepage will be rendered.
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/shop" component={Shop} />
        <Route exact path="/about" component={About} />
      </Switch>
    </div>
  );
};

export default App;
