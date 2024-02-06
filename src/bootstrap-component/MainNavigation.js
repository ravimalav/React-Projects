import React, { useContext } from "react";
import { NavLink, Link } from "react-router-dom";

import { Navbar, Nav, Container, Button } from "react-bootstrap";

import TopHeader from "../component/header/TopHeader";

import classes from "./MainNavigation.module.css";
import LoginContext from "../store/LoginContext";
import CartContext from "../store/Cart-Context";
import Cart from "../component/Cart/Cart";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
const MainNavigation = () => {
  const authCtx = useContext(LoginContext);
  const history = useHistory();
  const cartCtx = useContext(CartContext);
  const logoutHandler = () => {
    authCtx.removeToken();
    history.replace("/");
  };
  return (
    <>
      <Navbar style={{ backgroundColor: "#201052" }}>
        <Container>
          <Navbar.Brand>
            {" "}
            <NavLink
              to="/"
              activeClassName={classes.active}
              className={classes.simple}
            >
              ShopCart
            </NavLink>{" "}
          </Navbar.Brand>
          <Nav className={classes.header}>
            <ul className={classes.list}>
              {authCtx.isLoggedIn && (
                <>
                  <li>
                    <NavLink to="/home" activeClassName={classes.active}>
                      Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/store" activeClassName={classes.active}>
                      Store
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/about" activeClassName={classes.active}>
                      About
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/product" activeClassName={classes.active}>
                      Product
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/contactus" activeClassName={classes.active}>
                      ContactUs
                    </NavLink>
                  </li>{" "}
                </>
              )}
            </ul>
          </Nav>
          {!authCtx.isLoggedIn && (
            <li>
              <NavLink
                to="/auth"
                activeClassName={classes.active}
                className={classes.simple}
              >
                Login
              </NavLink>
            </li>
          )}
          <div className={classes.rightTop}>
            {authCtx.isLoggedIn && <Cart />}
            {authCtx.isLoggedIn && (
              <button onClick={logoutHandler}>Logout</button>
            )}
          </div>
        </Container>
      </Navbar>
      <TopHeader />
    </>
  );
};

export default MainNavigation;
