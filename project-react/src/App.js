import React, { Component } from "react";
import JumbotronComponent from "./components/JumbotronComponent";
import NavbarComponent from "./components/NavbarComponent";
import { BrowserRouter, Route } from "react-router-dom";
import HomeContainer from "./container/HomeContainer";
import CreateUserContainer from "./container/CreateUserContainer";
import EditUserContainer from "./container/EditUserContainer";
import DetailUserContainer from "./container/DetailUserContainer";

export default class App extends Component {
  render() {
    return (
      <div>
        <NavbarComponent />
        <JumbotronComponent />
        <BrowserRouter>
          <Route component={HomeContainer} path="/" exact />
          <Route component={CreateUserContainer} path="/create" exact />
          <Route component={EditUserContainer} path="/edit/:id" exact />
          <Route component={DetailUserContainer} path="/detail/:id" exact />
        </BrowserRouter>
      </div>
    );
  }
}
