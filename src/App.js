import "./App.css";
import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Jeopardy from "./components/jeopardy/Jeopardy";
import Welcome from "./components/welcome/Welcome";
import Clock from "./components/clock/Clock";
import Contact from "./components/contact/Contact";
import Navigation from "./components/navigation/Navigation";
import Error from "./components/404error/404Error";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Switch>
        <Route
          exact
          path="/"
          render={(props) => <Welcome {...props} name="Amrin" />}
        />
        <Route path="/welcome/:name" component={Welcome} />

        <Route path="/clock" component={Clock} />
        <Route path="/contact" component={Contact} />
        <Route exact path="/jeopardy" component={Jeopardy} />
        <Route component={Error} />
      </Switch>
    </div>
  );
}

export default App;
