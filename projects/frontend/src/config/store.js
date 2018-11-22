import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk';
import cartReducer from '../reducers/cartReducer'
import productReducer from '../reducers/productReducer'
import auth from "../reducers/auth";

const rootReducer = combineReducers({
  cart: cartReducer,
  product: productReducer,
  auth: auth
})

const middleware = applyMiddleware(thunk)

const composed = compose(middleware, window.devToolsExtension ? window.devToolsExtension() : f => f)

const store = createStore(
  rootReducer,
  composed
)

export default store;