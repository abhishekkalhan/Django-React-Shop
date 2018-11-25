import React, {Component} from "react";
import {NavLink, Switch, withRouter} from "react-router-dom"
import { connect } from 'react-redux';
import {logout} from "../actions/Auth";

class Navigation extends Component {
  render () {
    return (
      <div>
        {
          this.props.isAuthenticated ?
            <button type="button" onClick={this.props.logout} className="float-right button5">
              <span>Logout</span>
            </button>

            :

            <NavLink to="/login">
              <button type="button" className="float-right button5">
                <span>Login</span>
              </button>
            </NavLink>


        }

        <NavLink to="/">
          <button type="button" className={"button1"}>
            <span>Product</span>
          </button>
        </NavLink>
        <NavLink to="/cart">
          <button type="button" className={"button2"}>
            <span>Cart</span>
          </button>
        </NavLink>
        <NavLink to="/category">
          <button type="button" className={"button3"}>
            <span>Category</span>
          </button>
          <br/>
          <br/>
          <br/>
        </NavLink>


      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.isAuthenticated
  }
}
const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout())
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Navigation));
