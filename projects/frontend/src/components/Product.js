import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {addToCart, removeFromCart} from '../actions/cartActions'
import {fetchProductHandler} from "../actions/productActions";

class Product extends Component {
  componentDidMount() {
    this.props.fetchProductHandler()
  }

  add = item => {
    this.props.addToCart(item)
  }
  state = {
    search: ""
  }


  remove = item => {
    this.props.removeFromCart(item)
  }

  onChange = e => {
    this.setState({search : e.target.value});
  }

  render() {
    const {search} = this.state;

    console.log(search)

    const regex = new RegExp(search, "i");

    console.log(regex)
    const products = this.props.products.filter(({name}) => name.search(regex) > -1)
    return (

      <div className="row">
          <input placeholder="Search..." className="box" onChange={this.onChange}/>

          {products.map(item => (
            <React.Fragment>
              <div className="container">
                <br/>
              <p><a href="#">{item.category}</a>| {item.name}</p>
              <br/>
              <div className="col-12 col-sm-12 col-md-12 col-lg-6 text-center ">
                <img src={item.image} alt={item.name} height="350" width="200" className="float-left"/>
              </div>

              <div>
                <h1 className="my_prod_title">{item.name} </h1>
                <p> Rs {item.price}</p>

              </div>
              <div>

                <button type="button" onClick={() => this.add(item)} className={"button1"}><span>Add to Cart </span></button>
              </div>
              </div>
            </React.Fragment>
          ))}
          <br/>
          <br/>
          <br/>

        </div>



    )
  }
}


function mapStateToProps(state) {
  return {
    cart: state.cart,
    products: state.product.products
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    addToCart,
    removeFromCart,
    fetchProductHandler
  }, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(Product)

//<p className="text-justify my_prod_text">{description}</p>
// <button type="button" onClick={() => this.Remove(item)} className={"button1"}><span>Remove from Cart</span></button>