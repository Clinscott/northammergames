import React from 'react';
import './App.css';
import {Landing} from './page/landing/landing.js';
import {VideoPlayer} from './page/video/videoPlayer.js';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {active: true}
  }
  render(){
    return(
      <div>
        <Landing />
        <VideoPlayer />
      </div>
    );
  }
};

export default App;
