import { authActions } from "../store/authSlice";
import classes from "./Header.module.css";
import { useSelector, useDispatch } from "react-redux";

// Header component for the application
const Header = () => {
  // Get authentication status from Redux store
  const isAuth = useSelector((state) => state.auth.isAuthenticated);

  // Get dispatch function from Redux
  const dispatch = useDispatch();

  // Handler for logout button click
  const logoutHandler = (event) => {
    event.preventDefault();
    dispatch(authActions.logout());
  };

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {/* Show navigation only if user is authenticated */}
      {isAuth && (
        <nav>
          <ul>
            <li>
              <a href="/">My Products</a>
            </li>
            <li>
              <a href="/">My Sales</a>
            </li>
            <li>
              {/* Logout button triggers logoutHandler */}
              <button onClick={logoutHandler}>Logout</button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
