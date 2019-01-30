import React, { Component } from 'react';
import '../App.css';

class AddPhoto extends Component {
    state = {
        auther: this.props.auther,
        photoUrl:'',
        description:'',
        comment: [],
        
    }
    handleCange = (e)=>{
        const name = e.target.name;
    this.setState({ [name]: e.target.value });
    }
    AddPhoto = (e)=>{
        e.preventDefault()
        this.props.AddPhoto(this.state)
    }
  render() {
    return (
      <div>
        <form onSubmit={this.AddPhoto}>
            <label >
                Photo adress:
                <input type="text" name="photoUrl" onChange={this.handleCange} />
            </label >
            <label >
                Description:
                <input type="text" name="description"  onChange={this.handleCange} />
            </label >
            <input type="submit" value="Add Photo" />
        </form>
      </div>
    );
  }
}

export default AddPhoto;