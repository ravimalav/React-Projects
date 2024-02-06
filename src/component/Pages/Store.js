import { useRef } from "react";
import classes from "./Store.module.css";
const Store = () => {
  const titleRef = useRef();
  const priceRef = useRef();
  const imageRef = useRef();

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const details = {
      title: titleRef.current.value,
      price: priceRef.current.value,
      image: imageRef.current.value,
    };
    titleRef.current.value = "";
    priceRef.current.value = "";
    imageRef.current.value = "";
  };
  return (
    <section className={classes.control} onSubmit={onSubmitHandler}>
      <div className={classes.store}>
        <h1>This Store page</h1>
      </div>
      <form>
        <div>
          <label htmlFor="title">Title</label>
          <input type="text" id="title" ref={titleRef} />
        </div>
        <div>
          <label htmlFor="price">price</label>
          <input type="number" id="price" ref={priceRef} />
        </div>
        <div>
          <label htmlFor="image">image url</label>
          <input type="text" id="image" ref={imageRef} />
        </div>
        <button>Send Details</button>
      </form>
    </section>
  );
};
export default Store;
