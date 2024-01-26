import { useContext } from 'react';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { CartContext } from '../context/cart.context';
import CheckoutItem from '../checkout-item/checkout-item.component';
import './cart-icon.styles.scss';
import CartItem from '../cart-item/cart-item.component';
import { useNavigate } from "react-router-dom";

const CartIcon = () => {
    const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);
    const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);
    const goToCheckoutHandler = () => {
        navigate('/checkout')
    }
    const navigate = useNavigate();
    return(
        <div className='cart-icon-container' onClick={goToCheckoutHandler}>
            <ShoppingIcon className='shopping-icon'/>
            <span className='item-count'>{cartCount}</span>
        </div>
    )
}

export default CartIcon;