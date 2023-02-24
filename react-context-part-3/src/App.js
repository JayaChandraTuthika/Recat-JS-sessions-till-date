import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'
import {Component} from 'react'
import CartContext from './context/CartContext'
import LoginForm from './components/LoginForm'
import Home from './components/Home'
import Products from './components/Products'
import ProductItemDetails from './components/ProductItemDetails'
import Cart from './components/Cart'
import NotFound from './components/NotFound'
import ProtectedRoute from './components/ProtectedRoute'

import './App.css'

class App extends Component {
  state = {
    cartList: [
      {
        title: 'Product 1',
        brand: 'Brand Name',
        id: 1001,
        imageUrl:
          'https://assets.ccbp.in/frontend/react-js/sample-product-img.jpg',
        price: 760,
        quantity: 5,
      },
      {
        title: 'Product 2',
        brand: 'Brand Name',
        id: 1002,
        imageUrl:
          'https://assets.ccbp.in/frontend/react-js/sample-product-img.jpg',
        price: 760,
        quantity: 2,
      },
    ],
  }

  addCartItem = product => {
    this.setState(prev => ({cartList: [...prev.cartList, product]}))
  }

  deleteCartItem = () => {}

  render() {
    const {cartList} = this.state
    return (
      <BrowserRouter>
        <CartContext.Provider
          value={{
            cartList,
            addCartItem: this.addCartItem,
            deleteCartItem: this.deleteCartItem,
          }}
        >
          <Switch>
            <Route exact path="/login" component={LoginForm} />
            <ProtectedRoute exact path="/" component={Home} />
            <ProtectedRoute exact path="/products" component={Products} />
            <ProtectedRoute
              exact
              path="/products/:id"
              component={ProductItemDetails}
            />
            <ProtectedRoute exact path="/cart" component={Cart} />
            <Route path="/not-found" component={NotFound} />
            <Redirect to="not-found" />
          </Switch>
        </CartContext.Provider>
      </BrowserRouter>
    )
  }
}
export default App
