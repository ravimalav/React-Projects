import React, { useContext, useRef } from "react";
import classes from "./Login.module.css";
import LoginContext from "../../store/LoginContext";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Login = () => {
  const authCtx = useContext(LoginContext);
  const history = useHistory();
  const emailRef = useRef();
  const passwordRef = useRef();
  const onSubmitHandler = async (event) => {
    event.preventDefault();
    const response = await fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBlyoliBfFoYsSjIXFU0BtXMpwoPjJqykU",
      {
        method: "post",
        body: JSON.stringify({
          email: emailRef.current.value,
          password: passwordRef.current.value,
          returnSecureToken: true,
        }),
        headers: { "Content-Type": "application/json" },
      }
    );
    const data = await response.json();
    console.log(data);
    if (data.registered) {
      authCtx.addToken(data.idToken, data.email);
      history.replace("/home");
    }
    if (data && data.error) {
      console.log(data.error.message);
    }
  };
  return (
    <section className={classes.auth}>
      <form onSubmit={onSubmitHandler}>
        <div className={classes.control}>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" required ref={emailRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            required
            ref={passwordRef}
          />
        </div>
        <div className={classes.actions}>
          <button>Login</button>
        </div>
      </form>
    </section>
  );
};

export default Login;
