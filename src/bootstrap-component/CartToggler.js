import React, { useContext } from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import ReactDOM from "react-dom";
import classes from "./CartToggler.module.css";
import CartContext from "../store/Cart-Context";

const CartToggler = (props) => {
  //   const cartElements = [
  //     {
  //       title: "Colors",

  //       price: 100,

  //       imageUrl:
  //         "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",

  //       quantity: 2,
  //     },

  //     {
  //       title: "Black and white Colors",

  //       price: 50,

  //       imageUrl:
  //         "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",

  //       quantity: 3,
  //     },

  //     {
  //       title: "Yellow and Black Colors",

  //       price: 70,

  //       imageUrl:
  //         "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",

  //       quantity: 1,
  //     },
  //   ];

  const cartCntx = useContext(CartContext);

  const removeCartItemHandler = () => {};

  const cartItems = cartCntx.items.map((item, index) => {
    return (
      <Row key={index}>
        <Col lg={4}>
          {
            <div className="text-center">
              <img
                src={item.imageUrl}
                style={{ maxHeight: "4rem", maxWidth: "4rem" }}
                alt={item.title}
              />
              <span>{item.title}</span>
            </div>
          }
        </Col>
        <Col lg={4}>{item.price}</Col>
        <Col lg={4}>
          <div style={{ display: "flex", justifyContent: "space-evenly" }}>
            <span style={{ border: "solid black 1px", padding: "10px" }}>
              {item.quantity}
            </span>

            <Button
              variant="danger"
              onClick={removeCartItemHandler.bind(null, index)}
            >
              REMOVE
            </Button>
          </div>
        </Col>
      </Row>
    );
  });

  const htmlElement = document.getElementById("overlay");
  const overlay = (
    <div className={classes["cart-overlay"]}>
      <Card
        className={classes["cart-modal"]}
        //   style={{ width: "50vw", height: "100vh", float: "right" }}
        //   className="m-5"
      >
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
  );
  return ReactDOM.createPortal(overlay, htmlElement);
};

export default CartToggler;
