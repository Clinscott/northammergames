import React from 'react';
import './App.css';
import {Landing} from './page/landing';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {active: true}
  }
  render(){
    return(
      <Landing />
    );
  }
};

export default App;
