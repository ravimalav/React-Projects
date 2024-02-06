import React, { useState } from "react";

const ProductContext = React.createContext({
  productDetail: "",
  addProductDetail: (item) => {},
});

export const ProductProvider = (props) => {
  const [productDetails, setProductDetails] = useState(null);
  const addProductDetailHandler = (details) => {
    setProductDetails(details);
  };
  const value = {
    productDetail: productDetails,
    addProductDetail: addProductDetailHandler,
  };
  return (
    <ProductContext.Provider value={value}>
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductContext;
