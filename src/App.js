import React, { Component } from 'react';
import {
  BrowserRouter,
  Route
} from 'react-router-dom';

import axios from 'axios';
import config from './Config';
import Nav from './components/Nav';
import Gallery from './components/Gallery';
import SearchForm from './components/SearchForm';

import './index.css';


class App extends Component{

  state = {
    images: []
  };

  componentDidMount() {
    axios.get(` https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${config.My_Key}&tags=sea%2C+vintage%2C+Winter+Forest&per_page=&format=json&nojsoncallback=1`)
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
