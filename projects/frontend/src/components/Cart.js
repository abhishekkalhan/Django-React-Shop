import React from "react"
import {connect} from 'react-redux'
import {ADD_TO_CART, REMOVE_FROM_CART} from "../constants/constants";

function sort(items) {
  return items.sort((a, b) => (a.id > b.id) ? 1 : ((b.id > a.id) ? -1 : 0))
}
function Cart(props) {
  console.log(sort(props.cart))
  return <table>
    <thead>
    <tr>
      <th>
        Item
      </th>
      <th>
        Quantity
      </th>
      <th></th>
      <th></th>
    </tr>
    </thead>
    <tbody>
    {
    sort(props.cart).map(item => <tr>
      <td>{item.name}</td>
      <td>{item.quantity}</td>
      <td>
        <button className={"button6"} onClick={(e) => props.addToCart(item)}>+</button>
        <button className={"button6"} onClick={(e) => props.removeFromCart(item)}>-</button>
      </td>
      <td>
        <button className={"button7"}  onClick={(e) => props.removeAllFromCart(item)}>
        Remove all from Cart
        </button>
      </td>
    </tr>)

    }
    </tbody>

  </table>
}

function mapStateToProps(state) {
  return {
    cart: state.cart,
  }
}

function mapDispatchToProps(dispatch){
  return {
    addToCart: (item) => {
      dispatch({ type: 'ADD_TO_CART', item})
    },
    removeFromCart: (item) => {
      dispatch({ type: 'REMOVE_FROM_CART', item})
    },
    removeAllFromCart: (item) => {
      dispatch({ type: 'REMOVE_ALL', item})
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Cart)