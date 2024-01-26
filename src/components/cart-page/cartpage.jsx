import React from "react";
import './cartpage.scss';

const CartPage = () => {
    return (
            <div class="cart__warnings">
                <h1 class="cart__empty-text">Your cart is empty</h1>
                <a href="shop/" class="btn"> Continue shopping </a>
                <h2 class="cart__login-title">Have an account?</h2>
                <p class="cart__login-paragraph">
                <a  href="auth" >Log in</a> to check
                out faster.
                </p>
            </div>
    );
}

export default CartPage;