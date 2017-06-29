import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {connect} from 'react-redux';
import {addTodo} from './actionTypes';
class App extends Component {
  GG (txt,e,a) {
    let ipt = this.refs.ipt;
    console.log(e)
    console.log(a)
    this.props.dispatch(addTodo(ipt.value));
  } 
  render() {
    const { user} = this.props;
    return (
      <div className="index_home">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React {user}</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <input type="text" ref='ipt' onInput={this.GG.bind(this,'今晚打老虎12111')}/>
        {this.props.children}
      </div>
    );
  }
}
function mapStateToProps(state){
  return {
    user: state.user
  }
}

const MyApp = connect(mapStateToProps)(App);
export default MyApp;
