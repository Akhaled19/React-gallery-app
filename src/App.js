import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
  Link
} from 'react-router-dom';

import axios from 'axios';
import config from './Config';
import Nav from './components/Nav';
import Gallery from './components/Gallery';
import SearchForm from './components/SearchForm';

import './index.css';

//save the url as a variable 
const flickrURL = ` https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${config.My_Key}&tags=sea%2C+vintage%2C+Winter+Forest&per_page=&format=json&nojsoncallback=1`;
class App extends Component {

  constructor() {
    super();
    this.state = {
      photos: []
    };
  }
  

  componentDidMount() {
    axios.get(flickrURL)
      .then( response => {
        //console.log(response);
        this.setState({
          photos: response.data.data
        });
      })
      .catch( error => {
        console.log('Error fetching and parsing data', error);
      });

  }

  render() {
    console.log(this.state.photos);
    return (
      <BrowserRouter>
        <div className="container">
          <SearchForm />
          <Nav />
          <Gallery data={this.state.photos} />
        </div>
      </BrowserRouter> 
    );
  }
}

export default App;
