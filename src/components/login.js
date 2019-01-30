import React, { Component } from 'react';
import '../App.css';

class Login extends Component {
    state = {
        auther: '',
        
    }
    handleCange = (e)=>{
        this.setState({auther: e.target.value})
    }
    onLogin = (e)=>{
        e.preventDefault()
        this.props.login(this.state.auther)
    }
  render() {
    return (
      <div>
        <form onSubmit={this.onLogin}>
            <input type="text"  onChange={this.handleCange} />
            <input type="submit" value="Login" />
        </form>
      </div>
    );
  }
}

export default Login;