import React, { Component } from 'react';
import '../App.css';

class PhotoWall extends Component {
  

render(){
    return(
        <div>
            <h2 onClick={() => { this.props.changeScreen('AddPhoto') }}>Add Photo</h2>
            {this.props.photos.map((photo, key) => {
                return (<div className="photo" key={key}>
                    <img src={photo.photoUrl} alt="boohoo" />
                    <p>{photo.description}</p>
                </div>
                )
            })}
        </div>
    )
}


}
export default PhotoWall;