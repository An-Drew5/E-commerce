import { use } from "react";
import { Form } from "react-router-dom";
import UserProgressContext from "../store/UserProgressContext";
import Modal from "./Modal";

export default function AdminLogin() {
  const userProgressCtx = use(UserProgressContext);
  function handleClose() {
    userProgressCtx.hideAdminLogin();
  }

  return (
    <Modal open={userProgressCtx.progress === "adminLogin"}>
      <Form meethod='post'>
        <div className="control">
        <h3>Welcome</h3>
        <h2>Please Enter Login Credentials</h2>

        <form action="" className="checkout-form">
          <section>
            <div>
              <label htmlFor="userName" className="label">Username</label>
              <input
                type="text"
                name="userName"
                id="userName"
                className="input"
              />
            </div>
            <div>
              <label htmlFor="password" className="label">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                className="input"
              />
            </div>
            <div className="checkout-button">
              <button className="admin-button" type="button" onClick={handleClose}>
                Close
              </button>
              <button type="submit" className="admin-button">
                Login
              </button>
            </div>
          </section>
        </form>
      </div>
      </Form>
    </Modal>
  );
}
