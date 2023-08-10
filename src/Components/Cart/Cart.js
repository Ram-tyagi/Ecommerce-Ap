import React from "react";

import CartItems from "./CartItems";
import Modal from "./Modal";



const Cart = (props) => {
  return (
    <Modal>
      <CartItems />
    </Modal>
  );
};

export default Cart;