import { Route } from "react-router-dom";

import About from "./component/Pages/About";
import Store from "./component/Pages/Store";
import Home from "./component/Pages/Home";

import ContactUs from "./component/Pages/ContactUs";

import { Redirect, Switch } from "react-router-dom/cjs/react-router-dom.min";
import Product from "./component/Pages/Product";
import GridCard from "./bootstrap-component/GridCard";
import Layout from "./component/layout/Layout";
import Login from "./component/Pages/Login";
import { useContext } from "react";
import LoginContext from "./store/LoginContext";

function App() {
  const authCtx = useContext(LoginContext);
  console.log("user mail", authCtx.email);
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/home" exact>
          <GridCard />
        </Route>
        <Route path="/store" exact>
          <Store />
        </Route>
        <Route path="/about" exact>
          <About />
        </Route>
        <Route path="/contactus" exact>
          <ContactUs />
        </Route>
        <Route path="/product" exact>
          {authCtx.isLoggedIn && <Product />}
          {!authCtx.isLoggedIn && <Redirect to="/auth" />}
        </Route>
        <Route path="/product/:productId" exact>
          <ContactUs />
        </Route>
        <Route path="/auth" exact>
          <Login />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
