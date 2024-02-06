import React from "react";
import { Button } from "react-bootstrap";
import classes from "./TopHeader.module.css";

const TopHeader = (props) => {
  const headerHeight = props.state ? "15rem" : "8rem";
  return (
    <header
      style={{
        // height: "0rem",
        // maxWidth: "100vw",
        // backgroundColor: "grey",
        marginTop: "80px",
        display: "flex",
        justifyContent: "center",
        paddingTop: "35px",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* <h1>Shop Cart</h1> */}
      {/* {props.state ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            paddingTop: "35px",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Button>Get Our latest album</Button>
          <br />
          <Button>play button</Button>
        </div>
      ) : (
        ""
      )} */}
    </header>
  );
};
export default TopHeader;
