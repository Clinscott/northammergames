import React from 'react';
import { Video } from './video.js';
import { Menu } from './menu.js';

const VIDEOS = {
  Brad: '',
  Craig: '',
  Northammer: ''
};

export class VideoPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.chooseVideo = this.chooseVideo.bind(this);
    this.state = { src: VIDEOS.Northammer };
  }
  chooseVideo(newVideo){
    this.setState({
      src: VIDEOS[newVideo]
    });
  }
  
  render() {
    return (
      <div>
        <h1>The ShitShow</h1>
        <Menu chooseVideo={this.chooseVideo}/>
        <Video src={this.state.src}/>
      </div>
    );
  }
}