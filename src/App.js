import React, { Component } from 'react';
import './App.css';
import logo from './logo.png';
import Login from './components/login'
import PhotoMain from './components/PhotoMain'
class App extends Component {
  state = {
    auther: '',
    
}



login = (auther)=>{
  this.setState({auther})
}
  render() {
    return (
      <div className="App">
      
      {this.state.auther?
       <PhotoMain auther={this.state.auther}/>
       :
       <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Login login={this.login} />
      </header>
        }
      </div>
    );
  }
}

export default App;
