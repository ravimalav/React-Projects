import React, { useContext } from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import ReactDOM from "react-dom";
import classes from "./CartToggler.module.css";

import LoginContext from "../store/LoginContext";
import CartContext from "../store/Cart-Context";

const CartToggler = (props) => {
  const authCtx = useContext(LoginContext);
  const cartCtx = useContext(CartContext);
  const crudMail = authCtx.email.replace(/[^a-zA-Z]/g, "");
  const removeCartItemHandler = async (id) => {
    try {
      const response = await fetch(
        `https://crudcrud.com/api/80c48cee13bf4a3aac0d3c9b6edfe70b/cart${crudMail}/${id}`,
        {
          method: "delete",
        }
      );
      cartCtx.removeItem();
      props.onChange();
    } catch {
      console.log("error in deletion");
    }
  };

  const cartItems = props.data.map((item, index) => {
    return (
      <Row key={index}>
        <Col lg={4}>
          {
            <div className="text-center">
              <img
                src={item.item.imageUrl}
                style={{ maxHeight: "4rem", maxWidth: "4rem" }}
                alt={item.item.title}
              />

              <div>{item.item.title}</div>
            </div>
          }
        </Col>
        <Col lg={4}>
          <h5>Rs.{item.item.price}</h5>
        </Col>
        <Col lg={4}>
          <div style={{ display: "flex", justifyContent: "space-evenly" }}>
            <span style={{ border: "solid black 1px", padding: "10px" }}>
              {item.item.quantity}
            </span>

            <Button
              variant="danger"
              onClick={removeCartItemHandler.bind(null, item._id)}
            >
              REMOVE
            </Button>
          </div>
        </Col>
      </Row>
    );
  });

  const htmlElement = document.getElementById("overlay");
  const backDrop = <div className={classes.backdrop} onClick={props.onClose} />;
  const overlay = (
    <>
      <div className={classes["cart-overlay"]}>
        <Card className={classes["cart-modal"]}>
          <Card.Body>
            <Card.Title className="text-center  ">
              <span>Cart</span>
              <button
                style={{
                  display: "flex",
                  alignItems: "flex-end",
                  float: "right",
                  marginTop: "0",
                }}
                onClick={props.onClose}
                className={classes["close-button"]}
              >
                X
              </button>
            </Card.Title>
            <Container>
              <Row>
                <Col lg={4} style={{ textDecoration: "underline" }}>
                  <h5>ITEM</h5>
                </Col>
                <Col lg={4} style={{ textDecoration: "underline" }}>
                  <h5>PRICE</h5>
                </Col>
                <Col lg={4} style={{ textDecoration: "underline" }}>
                  <h5>QUANTITY</h5>
                </Col>
              </Row>

              {cartItems}
            </Container>
          </Card.Body>
        </Card>
      </div>
    </>
  );
  return <>{ReactDOM.createPortal(overlay, htmlElement)}</>;
};

export default CartToggler;
