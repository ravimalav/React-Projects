import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import { Navbar, Nav, Container } from "react-bootstrap";
import Cart from "../component/Cart/Cart";
import TopHeader from "../component/header/TopHeader";

import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  return (
    <>
      <Navbar
        fixed="top"
        expand="sm"
        bg="dark"
        data-bs-theme="dark"
        className="bg-body-tertiary "
      >
        <Container>
          <Navbar.Brand>
            {" "}
            <NavLink to="/" activeClassName={classes.active}>
              SQ
            </NavLink>{" "}
          </Navbar.Brand>
          <Nav className={classes.header}>
            <ul className={classes.list}>
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
                  Contact Us
                </NavLink>
              </li>
              <li>
                <NavLink to="/auth" activeClassName={classes.active}>
                  Login
                </NavLink>
              </li>
            </ul>
          </Nav>

          {/* <Cart /> */}
        </Container>
      </Navbar>
      <TopHeader />
    </>
  );
};

export default MainNavigation;
