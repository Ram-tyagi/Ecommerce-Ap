
import React, { useState } from "react";
import Cart from "./Components/Cart/Cart";
import Store from "./Components/Store";
import Header from "./Components/Layouts/Header";
import  Footer  from "./Components/Layouts/Footer";
function App() {
 
    const [storeVisible, setStoreVisible] = useState(false);
    const [cartVisible, setCartVisible] = useState(false);
  
    const visibleStoreHandler = () => {
      setStoreVisible(true);
    };
  
    const visibleCartHandler = () => {
      if(cartVisible === false){
        setCartVisible(true);
      } else {
        setCartVisible(false);
      }
  
    };
    return (
    
      <div style={{backgroundColor: "#ffff66"}}>
        <Header onClickStore={visibleStoreHandler} onClickCart={visibleCartHandler} />
        {storeVisible && <Store />}
        {cartVisible && <Cart />}
        <Footer />
      </div>
  );
}

export default App;
