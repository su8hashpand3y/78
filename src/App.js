import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import {Home} from './components/home';
import { RajdootPrivacy } from './components/Rajdoot/privacy'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
    <div>
      contact us at s89games@outlook.com
      {/* <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/topics">Topics</Link>
        </li>
      </ul> */}

      <hr />

      <Route exact path="/" component={Home} />
      <Route exact path="/rajdoot/privacy" component={RajdootPrivacy} />
      {/* <Route path="/about" component={About} />
      <Route path="/topics" component={Topics} /> */}
    </div>
  </Router>
      </div>
    );
  }
}

export default App;
