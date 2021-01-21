import React from "react";
import { Link } from "react-router-dom";
// import auth from "../../firebase/firebase.utils";
import firebase from "firebase";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import "./header.styles.scss";

const Header = ({ currentUser }) => (
  <div className="header">
    <Link to="/" className="logo-container">
      <Logo className="logo" />
    </Link>

    <div className="options">
      <Link className="option" to="/shop">
        SHOP
      </Link>
      <Link className="option" to="/contact">
        CONTACT
      </Link>
      {currentUser ? (
        <React.Fragment>
          <div
            className="option userOption"
            onClick={() => firebase.auth().signOut()}
          >
            SIGNOUT
          </div>
          <div className="userOptionView">{currentUser.displayName}</div>
        </React.Fragment>
      ) : (
        <Link className="option" to="/signin">
          SIGN IN
        </Link>
      )}
    </div>
  </div>
);

export default Header;
