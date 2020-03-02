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

const navQuery = 'sea%2C+clouds%2C+statue&color_codes=b';

class App extends Component {

    state = {
      photos: [],
    }
  
  handleClick = (e) =>  {
    console.log(e.target);
  }

  //server request
  search = () => {
    //save the url as a variable 
    const flickrURL = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${config.My_Key}&tags=${navQuery}&per_page=24&format=json&nojsoncallback=1`;
    
    axios.get(flickrURL)
      .then( response => {
        //handle data
        this.setState({
          photos: response.data.photos.photo
        })
      })
      .catch( error => {
        //handle error
        console.log(error);
      })
  }

  componentDidMount() {
    this.search();
  }

  render() {
    console.log(this.state.photos);
    return (
      <BrowserRouter>
        <div className="container">
          <SearchForm />
          <Nav />
          <Gallery  data={this.state.photos} />
        </div>
      </BrowserRouter> 
    );
  }
}

export default App;
