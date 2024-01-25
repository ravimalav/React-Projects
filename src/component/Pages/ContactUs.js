import { useRef } from "react";
import classes from "./ContactUs.module.css";
import { useParams } from "react-router-dom";

const ContactUs = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const mobileNumberRef = useRef();
  const param = useParams();

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const details = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      mobileNumber: mobileNumberRef.current.value,
    };
    nameRef.current.value = "";
    emailRef.current.value = "";
    mobileNumberRef.current.value = "";
    try {
      const response = await fetch(
        "https://react-http-request-48aa3-default-rtdb.firebaseio.com/e-commerce.json",
        {
          method: "POST",
          body: JSON.stringify(details),
          headers: {
            "Content-Type": "Application/json",
          },
        }
      );
      console.log("detials posted on backend are ", await response.json());
    } catch {
      console.log("error in posting data");
    }
  };
  return (
    <section className={classes.control} onSubmit={onSubmitHandler}>
      <p>{param.productId}</p>
      <form>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" ref={nameRef} />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" ref={emailRef} />
        </div>
        <div>
          <label htmlFor="mobile">Mobile Number</label>
          <input type="phone" id="mobile" ref={mobileNumberRef} />
        </div>
        <button>Send Details</button>
      </form>
    </section>
  );
};
export default ContactUs;
