import { Route, Routes,Navigate } from "react-router-dom";
import React, { useState,useContext,Suspense} from "react";
import AuthContext from "./Components/storeContext/auth-context";
import Home from "./Components/Home/Home";
import Cart from "./Components/Cart/Cart";


const Store = React.lazy(() => import("./Components/Store"));
const Header = React.lazy(() => import("./Components/Layouts/Header"));
const Footer = React.lazy(() => import("./Components/Layouts/Footer"));

const CartProvider = React.lazy(() => import("./Components/Store/CartProvider"));

const Login = React.lazy(() => import("./Components/Login/Login"));

const ContactUs = React.lazy(() => import("./Components/ContactUs/ContactUs"));
const Product = React.lazy(() => import("./Components/Product"));
const About = React.lazy(() => import("./Components/About/About"));



const productsArrs = [
  {
    title: "Colors",
    price: 100,
    imageUrl: [
      "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
      
    ],
    des: "Lorem ipsum carrots enhanced rebates. Excellent sayings of a man of sorrows",
  },

  {
    title: "Black and white Colors",
    price: 50,
    imageUrl: ["https://prasadyash2411.github.io/ecom-website/img/Album%202.png"],
    des: "Lorem ipsum carrots enhanced rebates. Excellent sayings of a man of sorrows",
  },

  {
    title: "Yellow and Black Colors",
    price: 70,
    imageUrl: ["https://prasadyash2411.github.io/ecom-website/img/Album%203.png"],
    des: "Lorem ipsum carrots enhanced rebates. Excellent sayings of a man of sorrows",
  },

  {
    title: "Blue Color",
    price: 100,
    imageUrl: ["https://prasadyash2411.github.io/ecom-website/img/Album%204.png"],
    des: "Lorem ipsum carrots enhanced rebates. Excellent sayings of a man of sorrows",
  },
];

function App() {
 
    const [storeVisible, setStoreVisible] = useState(true);
    const [cartVisible, setCartVisible] = useState(false);
    
    const authCtx = useContext(AuthContext);

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
      <CartProvider>
      <div>
      <Header
          onClickStore={visibleStoreHandler}
          onClickCart={visibleCartHandler}
        />
        <Routes>
        <Route path="/" element={<Home />} />
            <Route
              path="/store"
              element={
                authCtx.isLoggedIn ? (
                  <Suspense fallback={<p>Loading...</p>}><Store productsArr={productsArrs} /></Suspense>
                ) : (
                  <Navigate to="/login" />
                )
              }
            />
            <Route
              path="/about"
              element={
                <Suspense fallback={<p>Loading...</p>}>
                  <About />
                </Suspense>
              }
            />
            <Route path="/contactus" element={<Suspense fallback={<p>Loading...</p>}><ContactUs /></Suspense>} />
            <Route path="/login" element={<Suspense fallback={<p>Loading...</p>}><Login /></Suspense>} />
            <Route
              path="/store/:productId"
              element={<Suspense fallback={<p>Loading...</p>}><Product productsArr={productsArrs} /></Suspense>}
            />
        </Routes>
        {cartVisible && <Cart />}
        <Footer />
      </div>
    </CartProvider>
      
  );
}

export default App;
