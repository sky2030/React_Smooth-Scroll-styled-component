import React from 'react';
import './App.css';
//import Navbar from './components/Navbar';
//import Sidebar from "./components/Sidebar";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './pages';
import SigninPage from './pages/signin';
//import SignIn from './components/SignIn';

function App() {
  return (
    <Router>
    
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/signin' component={SigninPage} exact />
        
      </Switch>
      
    </Router>
  );
}

export default App;
