import React, { Component } from 'react';
import {
  BrowserRouter,
  Route
} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import Gallery from './components/Gallery';
import SearchForm from './components/SearchForm';
import NotFound from './components/NotFound';

class App extends Component{
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <SearchForm />
          <Nav />
          <Gallery />
          <NotFound />
        </div>
      </BrowserRouter> 
    );
  }
}

export default App;
