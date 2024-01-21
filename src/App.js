import GridCard from "./bootstrap-component/GridCard";
import MainNavigation from "./bootstrap-component/MainNavigation";
import Footer from "./bootstrap-component/Footer";
import TopHeader from "./component/header/TopHeader";
import CartProvider from "./store/CartProvider";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import RootLayout from "./component/Root/RootLayout";
import ErrorPage from "./bootstrap-component/Pages/Error";
import About from "./component/Pages/About";
import Store from "./bootstrap-component/Store";
import Home from "./component/Pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/home", element: <Home /> },
      { path: "/store", element: <Store /> },
      { path: "/about", element: <About /> }, // Add the Route for /about
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
    // <CartProvider>
    //   <NavBar />
    //   <TopHeader />
    //   <GridCard />
    //   <Footer />
    // </CartProvider>
  );
}

export default App;
