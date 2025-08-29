import { use, useState } from "react";
import UserProgressContext from "../store/UserProgressContext";
import CartContext from "../store/shopping-cart-context";
import Modal from "./Modal";
import Error from "./Error";

export default function Checkout() {
  const [errors, setErrors] = useState([]);

  const userProgressCtx = use(UserProgressContext);
  const cartCtx = use(CartContext);

  const totalPrice = cartCtx.items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const formattedTotalPrice = `GHC${totalPrice.toFixed(2)}`;

  function handleClose() {
    userProgressCtx.hideCheckout();
    setErrors([]);
  }

  function handleCloseSuccess() {
    cartCtx.clearCart(); // Clear the cart after success
    userProgressCtx.hideCheckout();
  }

  function checkoutAction(event) {
    event.preventDefault();
    const data = new FormData(event.target);

    const customerName = data.get("name");
    const customerNumber = data.get("phoneNumber");
    const customerCity = data.get("city");
    const customerRegion = data.get("region");
    const customerLandmark = data.get("landmark");

    const errorList = [];

    if (!customerName || customerName.trim() === "") {
      errorList.push("Please Enter Name");
    }

    if (
      !customerNumber ||
      customerNumber.trim() === "" ||
      customerNumber.length < 10
    ) {
      errorList.push("Number must be 10 digits");
    }

    if (!customerRegion || customerRegion.trim() === "") {
      errorList.push("Please Enter Your Region");
    }

    if (!customerCity || customerCity.trim() === "") {
      errorList.push("Please Enter your City");
    }

    if (!customerLandmark || customerLandmark.trim() === "") {
      errorList.push(
        "Please Enter landmark. (eg. Sokoban Assemblies Junction)"
      );
    }

    setErrors(errorList);

    if (errorList.length === 0) {
      userProgressCtx.showSuccess(); // Switch to success modal
      console.log("Order submitted successfully!");
    }
  }

  // Render success modal if progress is 'success'
  if (userProgressCtx.progress === "success") {
    return (
      <Modal open={true}>
        <h2>Success!</h2>
        <p>Your order was submitted successfully.</p>
        <p>We will notify you with more details through text message in minutes.</p>
        <button type="button" className="success-button" onClick={handleCloseSuccess}>Okay</button>
      </Modal>
    );
  }

  // Otherwise, render the checkout form modal
  return (
    <Modal open={userProgressCtx.progress === "checkout"} id="checkout" >
      <form onSubmit={checkoutAction} className="checkout-form">
        <div>
          <h2>Checkout</h2>
          <p>
            Total Amount: <strong>{formattedTotalPrice}</strong>
          </p>
        </div>
        <section className="control">
          <label className="label" htmlFor="name">
            Full Name
          </label>
          <input className="input" type="text" id="name" name="name" />
          <label htmlFor="phone_number" className="label">
            Phone Number
          </label>
          <input className="input" type="text" id="number" name="phoneNumber" />
          <div className="control-row ">
            <div>
              <label htmlFor="Region" className="label">
                Region
              </label>
              <input className="input" type="text" id="region" name="region" />
            </div>
            <div>
              <label htmlFor="City" className="label">
                City
              </label>
              <input className="input" type="text" id="city" name="city" />
            </div>
          </div>
          <label htmlFor="landmark" className="label">
            Nearest Landmark
          </label>
          <input className="input" type="text" id="landmark" name="landmark" />
        </section>

        <Error messages={errors} />

        <div className="checkout-button">
          <button type="button" onClick={handleClose}>
            close
          </button>
          <button type="submit">Submit Order</button>
        </div>
      </form>
    </Modal>
  );
}
