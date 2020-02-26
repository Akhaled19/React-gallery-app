import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
} from 'react-router-dom';

import axios from 'axios';
import config from './Config';
import Nav from './components/Nav';
import Gallery from './components/Gallery';
import SearchForm from './components/SearchForm';

import './index.css';


class App extends Component {

    state = {
      photos: [],
    }
  
  handleClick = (e) =>  {
    console.log(e.target);
  }

  //importing the data
  dataGetter = (navQuery) => {
    //save the url as a variable 
    const flickrURL = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${config.My_Key}&tags=sea%2C+vintage%2C+Winter+Fores&per_page=24&format=json&nojsoncallback=1`;
    
    axios.get(flickrURL)
      .then( response => {
        //handle data
        this.setState({
          photos: response.data.photos
        })
      })
      .catch( error => {
        //handle error
        console.log(error);
      })
  }


  render() {
    console.log(this.state.photos);
    return (
      <BrowserRouter>
        <div className="container">
          <SearchForm />
          <Nav />
          <Gallery  />
        </div>
      </BrowserRouter> 
    );
  }
}

export default App;
