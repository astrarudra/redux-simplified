import React from 'react';
import logo from './logo.svg';
import './App.css';
import Todo from './components/Todo'
import Counter from './components/Counter'
import ButtonPanel from './components/ButtonPanel'
import RealObject from './components/RealObject'
import { connect } from 'react-redux'

function App(props) {
  console.log("App Is Rendered", props)
  return (
    <div className="App">
      <Todo />
      <Counter />
      <ButtonPanel />
      <RealObject />
    </div>
  );
}

export default connect(s => ({state: s}))(App);
