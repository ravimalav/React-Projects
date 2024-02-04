import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";

import About from "./component/Pages/About";
import Store from "./bootstrap-component/Store";
import Home from "./component/Pages/Home";
import Footer from "./bootstrap-component/Footer";
import ErrorPage from "./component/Pages/Error";
import ContactUs from "./component/Pages/ContactUs";
import MainNavigation from "./bootstrap-component/MainNavigation";
import { Switch } from "react-router-dom/cjs/react-router-dom.min";
import Product from "./component/Pages/Product";
import GridCard from "./bootstrap-component/GridCard";
import Layout from "./component/layout/Layout";
import Login from "./component/Pages/Login";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <GridCard />
        </Route>
        <Route path="/home" exact>
          <Home />
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
          <Product />
        </Route>
        <Route path="/product/:productId" exact>
          <ContactUs />
        </Route>
        <Route path="/auth" exact>
          <Login />
        </Route>
      </Switch>
    </Layout>
    // </CartProvider>
  );
}

export default App;
