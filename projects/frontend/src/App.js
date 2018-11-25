import React, { Component } from 'react';
import './App.css'
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Product from './components/Product';
import Cart from './components/Cart';
import Category from './components/Category';
import Error from './components/Error';
import Navigation from './components/Navigation';
import { Provider } from 'react-redux';
import store from './config/store';
import Login from "./components/Login";
import connect from "react-redux/es/connect/connect";
import Auth, {authCheckState} from './actions/Auth';
import Signup from "./components/Signup";





class App extends Component {

  componentDidMount(){
    this.props.onTryAutoSignup();
  }
  render() {
    return (
            <Provider store={store} {...this.props}>
            <BrowserRouter>
              <div className={"page_container"}>
                <h1>Welcome to the Electronics Mega Store</h1>
              <Navigation/>
              <Switch>
                <Route path="/login" component={Login}/>
                <Route path="/" component={Product} exact />
                <Route path="/category" component={Category} />
                <Route path="/cart" component={Cart}/>
                <Route exact path="/signup" component={Signup}/>
                <Route component = {Error} />
              </Switch>
              </div>
            </BrowserRouter>
            </Provider>


    );

  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.token !== null
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignup: () => dispatch(authCheckState())
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (App);



