import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NotesPage from './containers/NotesPage';
import NewsPage from './containers/NewsPage';
import SignOutLink from './components/auth/SignOutLink'
import SignInForm from './components/auth/SignInForm'
import SignUpForm from './components/auth/SignUpForm'
import Homepage from './containers/Homepage';

class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <Route path="/notes" component={NotesPage} />
          <Route path="/news" component={NewsPage} />
          <Route path="/signout" component={SignOutLink} />
          <Route path="/signin" component={SignInForm} />
          <Route path="/signup" component={SignUpForm} />
          <Route path="/" component={Homepage} />
        </div>
      </Router>
  )}
}

export default App;
