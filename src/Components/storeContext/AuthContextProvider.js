import React, { useState,useContext } from "react";
import AuthContext from "./auth-context";
import CartContext from "../Store/cart-context";

const AuthContextProvider = (props) => {
  const [token, setToken] = useState(null);
  const [userEmail, setUserEmail] = useState(null);
  const cartCtx=useContext(CartContext);
  if (token === null && localStorage.length !== 0) {
    setToken(localStorage["user"]);
    setUserEmail(localStorage["userEmail"]);
  }

  const userLoggedIn = !!token;

  const loginHandler = (tokenId,email) => {
    setToken(tokenId);
    setUserEmail(email);
    cartCtx.onLogin();
    localStorage.setItem("user", tokenId);
    localStorage.setItem("email", email);
  };

  const logoutHandler = () => {
    setToken(null);
    setUserEmail(null);
    localStorage.removeItem("user");
    localStorage.removeItem("userEmail");
  };

  const authContext = {
    token: token,
    userEmail: userEmail,
    isLoggedIn: userLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };


  return (
    <AuthContext.Provider value={authContext}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;