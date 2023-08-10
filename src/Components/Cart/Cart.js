import React,{ useContext, useEffect, useState } from "react";

import CartItems from "./CartItems";
import Modal from "./Modal";
import classes from "./Cart.module.css";
import CartContext from "../Store/cart-context";



const Cart = (props) => {
    const cartCtx = useContext(CartContext);
    const [showCartItem, setShowCartItem] = useState(false);

    useEffect(()=>{
        if(cartCtx.items.length>0){
            setShowCartItem(true);
        } else {
            setShowCartItem(false);
        }
    }, [cartCtx.items.length])
    
  return (
    <Modal>
       <div className={classes.header}>
        
        {!showCartItem && <h6>Your Cart is Empty!</h6>}
        {showCartItem && <CartItems />}
      </div>
    </Modal>
  );
};

export default Cart;