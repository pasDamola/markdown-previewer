import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';



class TextArea extends Component {
  render() {
    return (
      <div style={{marginTop : 50}}>
        <textarea id="editor"value={this.props.text} onChange={this.props.handleChange}  />
      </div>
    );
  }
}

class Element extends Component {
  render(){
    return(
      <div>
        <p>
         {this.props.text}
        </p>

        </div>
    );
  }
}

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      textarea : '',
      element : 'Markdown Previewer!!'
    }
    this.handleChange = this.handleChange.bind(this);
  }


  handleChange(event) {
    this.setState({
      element: event.target.value
    })
  }
  
  render() {
    return (
      <div className="App">
      <TextArea text={this.state.element} handleChange={this.handleChange}/>
      <Element text={this.state.element} />
      </div>
    );
  }
}

export default App;
