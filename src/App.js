import React from 'react';
import './App.css';
import Navbar from './components/navbar';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import About from './components/pages/About';
import SignUp from './components/pages/SignUp';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/services"><Services /></Route>
          <Route path="/about"><About /></Route>
          <Route path="/"><Home /></Route>
        </Switch>
        <Footer/>
      </Router>
    </>
  );
}
export default App;