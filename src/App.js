import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import RootLayout from "./component/Root/RootLayout";

import About from "./component/Pages/About";
import Store from "./bootstrap-component/Store";
import Home from "./component/Pages/Home";
import Footer from "./bootstrap-component/Footer";
import ErrorPage from "./component/Pages/Error";
import ContactUs from "./component/Pages/ContactUs";
import MainNavigation from "./bootstrap-component/MainNavigation";
import { Switch } from "react-router-dom/cjs/react-router-dom.min";
import Product from "./component/Pages/Product";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <RootLayout />,
//     errorElement: <ErrorPage />,
//     children: [
//       { path: "/home", element: <Home /> },
//       { path: "/store", element: <Store /> },
//       { path: "/about", element: <About /> }, // Add the Route for /about
//       { path: "contactus", element: <ContactUs /> },
//     ],
//   },
// ]);

function App() {
  return (
    <div>
      <MainNavigation />
      <Switch>
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
      </Switch>
      <Footer />
    </div>
    // {/* <RouterProvider router={router} /> */}
    // <CartProvider>
    //   <NavBar />
    //   <TopHeader />
    //   <GridCard />
    //   <Footer />
    // </CartProvider>
  );
}

export default App;
