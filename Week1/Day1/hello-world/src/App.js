import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';
// import Greet from './components/Greet'
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import Message from './components/Message'
import Counter from './components/Counter'
import FunctionClick from './components/FunctionClick'

class App extends Component {
  render() {
    return (
      <div className="App">
        <FunctionClick />
        {/*<Counter />*/}
        {/* <Greet></Greet> */}
        {/* <Welcome></Welcome> */}
        {/* <Hello /> */}
      
        {/* <Greet name="Bruce" heroName="Batman"> 
          <p>This is children props.</p> 
        </Greet>
        <Greet name="Clark" heroName="Superman">
          <button>Action</button>
        </Greet> 
        <Greet name="Diana" heroName="Wonder Woman"/>

        <Welcome name="Bruce" heroName="Batman" />
        <Welcome name="Clark" heroName="Superman" />
        <Welcome name="Diana" heroName="Wonder Woman" />*/}
        {/*<Message />*/}
      </div>
    );
  }
}

export default App