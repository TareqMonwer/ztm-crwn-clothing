import React from "react";

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ email: "", password: "" });
  };

  handleChange = (event) => {
    const { value, name } = event.target;
    console.log(value, name);
    this.setState({[name]: value})
  }

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <input
            type="email"
            value={this.state.email}
            onChange={this.handleChange}
            required
          />
          <label>Email</label>

          <input
            type="password"
            onChange={this.handleChange}
            value={this.state.password}
            required
          />
          <label>Password</label>

          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default SignIn;
