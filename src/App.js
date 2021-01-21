import React from "react";
import { Switch, Route } from "react-router-dom";
import SigninAndSignup from "./components/pages/signin-and-signup/signin-signup.component";
import Header from "./components/header/header.component";
import HomePage from "./components/pages/homepage/homepage.component";
import ShopPage from "./components/pages/shop/shop.component";
import { auth } from "./firebase/firebase.utils";
import "./App.css";

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      currentUser: null,
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });
      // console.log(user);
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SigninAndSignup} />
        </Switch>
      </div>
    );
  }
}

export default App;
