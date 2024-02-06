import { useContext } from "react";
import classes from "../Pages/Product.module.css";
import ProductContext from "../../store/ProductContext";
import CartContext from "../../store/Cart-Context";

const Product = () => {
  const productCtx = useContext(ProductContext);
  const cartCtx = useContext(CartContext);
  const onClickHandler = () => {
    cartCtx.addItem({ ...productCtx.productDetail, quantity: 1 });
  };
  return (
    <div className={classes.container}>
      <div className={classes.title}>
        <h3>Product Title {productCtx.productDetail.title}</h3>
        <p>product review</p>
      </div>

      <div className={classes.title}>
        <img src={productCtx.productDetail.imageUrl} />
        <h5>
          about the product,the carlton london is premiuim mens buy site since
          1992
        </h5>
      </div>
      <div className={classes.actions}>
        <button onClick={onClickHandler}>Add To Cart</button>{" "}
      </div>
    </div>
  );
};

export default Product;
