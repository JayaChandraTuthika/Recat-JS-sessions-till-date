import CartContext from '../../context/CartContext'
import Header from '../Header'
import CartListView from '../CartListView'
import EmptyCartView from '../EmptyCartView'

import './index.css'

const Cart = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      const showEmptView = cartList.length === 0
      return (
        <>
          <Header />
          {showEmptView ? (
            <EmptyCartView />
          ) : (
            <div className="cart-container">
              <div className="cart-content-container">
                <h1 className="cart-heading">My Cart</h1>
                <CartListView />
              </div>
            </div>
          )}
        </>
      )
    }}
  </CartContext.Consumer>
)
export default Cart
