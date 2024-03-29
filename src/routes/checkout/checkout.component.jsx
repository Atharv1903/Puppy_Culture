import { useContext } from "react";
import { CartContext } from "../../components/context/cart.context";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";

import "./checkout.styles.scss";
import CartPage from "../../components/cart-page/cartpage";

const Checkout = () => {
  const { cartItems, addItemToCart, removeItemToCart, cartTotal } =
    useContext(CartContext);
    console.log(cartTotal);
  return (
    <div>
      {cartTotal ? <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <span className="total">Total: ₹{cartTotal}</span>
      
    </div> : <CartPage/>}
    </div>
    
  );
};

export default Checkout;
