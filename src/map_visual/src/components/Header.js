import React, { Component }  from "react";
import logo from '../logo.svg';

class Header extends Component {
  render() {
    return (
       <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {this.props.title}
        </p>
        <div>{this.props.num}</div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    )
  }
}

export default Header
