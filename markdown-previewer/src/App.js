import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';



class TextArea extends Component {
  render() {
    return (
      <div style={{marginTop : 50}}>
        <textarea id="editor"></textarea>
      </div>
    );
  }
}

class Element extends Component {
  render(){
    return(
      <div>
        <p>
         Me and Her!
        </p>

        </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
      <TextArea />
      <Element />
      </div>
    );
  }
}

export default App;
