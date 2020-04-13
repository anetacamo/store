import React from "react";
import "./main.scss";
import Homepage from "./components/Homepage";
import { Route, Switch } from "react-router-dom";

const App = () => {
  return (
    //an exact empty url is just slash, homepage will be rendered.
    <div className="App">
      <Switch>
        <Route exact path="/" component={Homepage} />
      </Switch>
    </div>
  );
};

export default App;
