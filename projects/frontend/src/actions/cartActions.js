import {ADD_TO_CART, REMOVE_FROM_CART, REMOVE_ALL} from '../constants/constants'

export function addToCart(item) {
  return {
    type: ADD_TO_CART,
    item
  }
}

export function removeFromCart(item) {
  return {
    type: REMOVE_FROM_CART,
    item
  }
}

export function removeAllFromCart(item) {
  return {
    type: REMOVE_ALL,
    item
  }
}