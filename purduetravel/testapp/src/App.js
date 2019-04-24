import React, { Component } from 'react';
import './App.css';
import { Route, BrowserRouter } from "react-router-dom";
import LoginPage from './routes/login/index';
import IndexPage from './routes/index/index';
import SignupPage from './routes/Signup/Signup';
import Dashboard from './routes/Dashboard/Dashboard';

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <a class="navbar-brand" href='/'>Navbar</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item active">
                <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/login">Login</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/signup">Sign Up</a>
              </li>
            </ul>
          </div>
        </nav>
        <BrowserRouter>
          <Route path="/login" component={LoginPage} />
          <Route path="/" exact component={IndexPage} />
          <Route path="/signup" component={SignupPage} />
          <Route path="/"exact component={Dashboard}/>
          
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
