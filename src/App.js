import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import RootLayout from "./component/Root/RootLayout";

import About from "./component/Pages/About";
import Store from "./bootstrap-component/Store";
import Home from "./component/Pages/Home";

import ErrorPage from "./component/Pages/Error";
import ContactUs from "./component/Pages/ContactUs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/home", element: <Home /> },
      { path: "/store", element: <Store /> },
      { path: "/about", element: <About /> }, // Add the Route for /about
      { path: "contactus", element: <ContactUs /> },
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
