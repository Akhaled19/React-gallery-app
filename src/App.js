import React, { Component } from 'react';
import {
  BrowserRouter,
  Route
} from 'react-router-dom';
import './App.css';
import axios from 'axios';
import Config from './Config';
import Nav from './components/Nav';
import Gallery from './components/Gallery';
import SearchForm from './components/SearchForm';
import config from './Config';



class App extends Component{

  state = {
    images: []
  };

  componentDidMount() {
    axios.get(config.My_Key)
      .then( response => {
        this.setState({
          images:response.data.data
        });
      })
      .catch( error => {
        console.log('Error fetching and parsing data', error);
      });

  }

  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <SearchForm />
          <Nav />
          <Gallery />
        </div>
      </BrowserRouter> 
    );
  }
}

export default App;
