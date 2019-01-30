import React, { Component } from 'react';
import '../App.css';
import PhotoService from '../services/photosService'
import AddPhoto from './AddPhoto'
import PhotoWall from './PhotoWall'
import logo from '../logo.png';

class PhotoMain extends Component {
    state = {
        photos: [],
        auther: this.props.auther,
        pageName: 'Loading-screen',

    }


    componentDidMount() {
        
            PhotoService.getPhotoist()
                .then(photos => {
                    this.setState({ photos, pageName: 'PhotoWall' })
                })
        
    }


    AddPhoto = (photo) => {
        this.changeScreen('Loading-screen')

        PhotoService.AddPhoto(photo)
            .then(photo => {
                this.setState({ photos: [...this.state.photos, photo], pageName: 'PhotoWall'})
            })
    }

    changeScreen = (screen)=>{
        this.setState({ pageName: screen })
    }

    render() {
        let screen;
        switch (this.state.pageName) {
            case 'Loading-screen':
                screen = (<h1>Loading....</h1>);
                break;

            case 'AddPhoto':
                screen = (<AddPhoto changeScreen={this.changeScreen} AddPhoto={this.AddPhoto} auther={this.state.auther} />);
                break;

            case 'PhotoWall':
            screen = (< PhotoWall changeScreen={this.changeScreen} photos={[...this.state.photos]} auther={this.state.auther}/>)

            break;

            // case 'Photo':
            // screen = (<ResultScreen />);
            // break;

            



            default:
            //   screen = (<h1>Loading....</h1>);



        }
        return (
            <div className="photo-container">
            <header className="App-header" onClick={()=>this.changeScreen('PhotoWall')}>
                <img src={logo} className="App-logo" alt="logo" />
                {this.state.pageName !== 'Loading-screen' &&
                <h1 >Photo Wall</h1>
                }
            </header>
                
                {screen}
            </div>
        );
    }
}

export default PhotoMain;