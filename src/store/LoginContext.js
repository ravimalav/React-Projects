import React, { useContext, useState } from "react";

const LoginContext = React.createContext({
  token: "",
  isLoggedIn: false,
  email: "",
  addToken: (token) => {},
  removeToken: () => {},
});

export const LoginContextProvider = (props) => {
  const initialToken = localStorage.getItem("token");
  const currentUser = localStorage.getItem("email");
  const [token, setToken] = useState(initialToken);
  const [email, setEmail] = useState(currentUser);
  const isLoggedInValue = !!token;
  const addTokenHandler = (token, email) => {
    localStorage.setItem("token", token);
    localStorage.setItem("email", email);
    setEmail(email);
    setToken(token);
  };
  const removeTokenHandler = () => {
    localStorage.removeItem("token");
    setEmail(null);
    setToken(null);
  };
  const loginContext = {
    token: token,
    isLoggedIn: isLoggedInValue,
    email: email,
    addToken: addTokenHandler,
    removeToken: removeTokenHandler,
  };
  return (
    <LoginContext.Provider value={loginContext}>
      {props.children}
    </LoginContext.Provider>
  );
};

export default LoginContext;
