import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import { Navbar, Nav, Container } from "react-bootstrap";
import Cart from "../component/Cart/Cart";
import TopHeader from "../component/header/TopHeader";
import GridCard from "./GridCard";
import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  const [state, setState] = useState(false);
  const homeLinkHandler = () => {
    setState(true);
  };
  const otherLinkhandler = () => {
    setState(false);
  };

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
          <Navbar.Brand href="#home">SQ</Navbar.Brand>
          <Nav className={classes.header}>
            <ul className={classes.list}>
              <li>
                <NavLink
                  to="/home"
                  className={({ isActive }) =>
                    isActive ? classes.active : undefined
                  }
                  end
                  onClick={homeLinkHandler}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/store"
                  className={({ isActive }) =>
                    isActive ? classes.active : undefined
                  }
                  onClick={state ? otherLinkhandler : ""}
                >
                  Store
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    isActive ? classes.active : undefined
                  }
                  onClick={state ? otherLinkhandler : ""}
                >
                  About
                </NavLink>
              </li>
            </ul>
          </Nav>

          {/* <Cart /> */}
        </Container>
      </Navbar>
      <TopHeader state={state} />
    </>
  );
};

export default MainNavigation;
