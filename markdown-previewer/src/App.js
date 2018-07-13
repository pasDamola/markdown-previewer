import React, { Component } from 'react';
import Marked from 'marked';
import './App.css';



class TextArea extends Component {
  style(a){
   return {
   fontSize : a,
   marginTop : 50
    }
 }
  render() {
    return (
      <div style={this.style(20)}>
        <textarea id="editor"value={this.props.text} onChange={this.props.handleChange}  />
      </div>
    );
  }
}


const Element = (props) => {
  return(
    <div id="preview">
        <p>
         {props.text}
        </p>

        </div>
  );
}

class App extends Component {
  state = {
      textarea : '',
      element : 'Markdown Previewer!!'
    }
   
  


  handleChange = (event) => {
    this.setState({
      element: event.target.value
    })
  };
  
  render() {
    return (
      <div className="App">
      <TextArea text={this.state.element} handleChange={this.handleChange} />
      <Element text={this.state.element} />
      </div>
    );
  }
}

export default App;
