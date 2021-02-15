import React from "react";
import { Link } from "react-router-dom";
// import auth from "../../firebase/firebase.utils";
import firebase from "firebase";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import "./header.styles.scss";
import {connect} from 'react-redux';

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

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser
})

export default connect(mapStateToProps)(Header);
