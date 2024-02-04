import React, { useState } from "react";

const LoginContext = React.createContext({
  token: "",
  isLoggedIn: false,
  addToken: (token) => {},
  removeToken: () => {},
});

export const LoginContextProvider = (props) => {
  const initialToken = localStorage.getItem("token");
  const [token, setToken] = useState(initialToken);
  const isLoggedInValue = !!token;
  const addTokenHandler = (token) => {
    localStorage.setItem("token", token);
    setToken(token);
  };
  const removeTokenHandler = () => {
    localStorage.removeItem("token");
    setToken(null);
  };
  const loginContext = {
    token: token,
    isLoggedIn: isLoggedInValue,
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
