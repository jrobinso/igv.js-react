import React, { createRef, Component } from 'react';
import logo from './logo.svg';
import './App.css';
import igv from 'igv';

var igvStyle = {
  paddingTop: '10px',
  paddingBottom: '10px',
  margin: '8px',
  border: '1px solid lightgray'
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to igv.js in React!</h1>
        </header>
        <AppIgv/>
      </div>
    );
  }
}

class AppIgv extends Component {

  constructor(props) {
    super(props)
    // Declare reference object for the dom node that will contain the igv.js component
    this.container = createRef(null)
  }


  componentDidMount() {
    // Create the igv.js component.
    const igvOptions = {genome: 'hg38', locus: 'BRCA1'};
    return igv.createBrowser(this.container.current, igvOptions);
  }

  render() {
    // Return the div that will contain igv.js
    return (
      <div ref={this.container}  style={igvStyle}></div>
    );
  }
}


export default App;
