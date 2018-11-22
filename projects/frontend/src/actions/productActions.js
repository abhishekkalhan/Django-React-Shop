import {FETCH_PRODUCTS} from '../constants/constants'

function fetchProducts(products) {
  return {
    type: 'FETCH_PRODUCTS',
    products
  }
}

export function fetchProductHandler() {
  return function (dispatch) {
    fetch('/api/shop/')
      .then(res => res.json())
      .then(products => dispatch(fetchProducts(products)))
      .catch(() => {
        dispatch(fetchProducts([]))
      })
  }
}
