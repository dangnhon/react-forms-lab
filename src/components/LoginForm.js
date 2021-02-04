import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: ""
    };
  }

  handleChangeName = (e) => {
    this.setState({
      username: e.target.value
    })
  }

  handleChangePass = (e) => {
    this.setState({
      password: e.target.value 
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    // if (this.state.password.length && this.state.username.length > 0) {
    //   this.props.handleLogin({username: this.state.username, password: this.state.password})
    // } else {
    //   alert("fill out both")
    // } 

    this.state.password.length && this.state.username.length > 0 ? this.props.handleLogin({username: this.state.username, password: this.state.password}) : alert("fill out both")
  }

  render() {
    return (
      <form onSubmit={(e) => this.handleSubmit(e)}>
        <div>
          <label>
            Username
            <input onChange={(e) => this.handleChangeName(e)} value={this.state.username} id="username" name="username" type="text" />
          </label>
        </div>
        <div>
          <label>
            Password
            <input onChange={(e) => this.handleChangePass(e)} value={this.state.password} id="password" name="password" type="password" />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
