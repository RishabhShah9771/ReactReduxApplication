import { useDispatch } from "react-redux";
import classes from "./Auth.module.css";
import { authActions } from "../store/authSlice";

// Auth component for handling user login
const Auth = () => {
  const dispatch = useDispatch(); // Get the dispatch function from Redux

  // Handler for form submission
  const loginHandler = (event) => {
    event.preventDefault(); // Prevent default form submission
    dispatch(authActions.login()); // Dispatch login action to Redux store
  };

  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={loginHandler}>
          {/* Email input field */}
          <div className={classes.control}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" />
          </div>
          {/* Password input field */}
          <div className={classes.control}>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
          </div>
          {/* Login button */}
          <button>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
