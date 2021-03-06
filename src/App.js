import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Login from "./pages/Login/Login";
import Category from "./pages/Category/Category";
import Cart from "./pages/Cart/Cart";
import Favorites from "./pages/Favorites/Favorites";
import Product from "../src/pages/Product/Product";
import Register from "./pages/Register/Register";
import Page404 from "./pages/Page404/Page404";

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <Switch>
          <Route path="/Login" component={Login} />
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/category/:categoryName" component={Category} />
          <Route path="/cart" component={Cart} />
          <Route path="/favorites" component={Favorites} />
          <Route path="/product/:productId" component={Product} />
          <Route path="/register" component={Register} />
          <Route path="/*" component={Page404} />
        </Switch>
      </div>
    );
  }
}

export default App;
