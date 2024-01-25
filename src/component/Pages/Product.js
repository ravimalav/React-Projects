import classes from "../Pages/Product.module.css";

const Product = () => {
  return (
    <div className={classes.container}>
      <div className={classes["image-container"]}>image</div>
      <div className={classes["details-container"]}>
        <div>product review</div>
        <div>
          about the product,the carlton london is premiuim mens buy site since
          1992
        </div>
        <div>
          <button>add to cart</button>
          <button>buy now</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
