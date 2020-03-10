import React, { Component } from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  
} from 'react-router-dom';

import axios from 'axios';
import config from './Config';
import './index.css';

//import components 
import Nav from './components/Nav';
import Gallery from './components/Gallery';
import SearchForm from './components/SearchForm';


//const navQuery = 'sea%2C+clouds%2C+nature';

class App extends Component {

  state = {
    //initial props state 
    photos: [], 
    queryString: '',
    isLoading: true,
  }



  //retrieve data for nav links
  navSearch = (query) => {
    //save the url as a variable 
    const flickrURL = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${config.My_Key}&tags=${query}&per_page=24&format=json&nojsoncallback=1`;
    
    axios.get(flickrURL)
    //handle data & setting the value back to false 
      .then( response => { 
        this.setState({
          //sets query props to the current selected tag 
          queryString: query,
          //sets retrieved api data to the photos array
          photos: response.data.photos.photo,
          isLoading: false
        });
      })
      .catch( error => {
        //handle error
        console.log('Error fetching and parsing data: ', error);
      });

      //resetting isLoading to true so that 'Loading...' message show on any API call load.
      this.setState({isLoading: true});
  }

 

  //retrieve data for search input 
  performSearch = (query) => {
    const flickrURL = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${config.My_Key}&tags=${query}&per_page=24&format=json&nojsoncallback=1`;
    
    axios.get(flickrURL)
      .then( response => {
        //handle data
        this.setState({
          queryString: query,
          photos: response.data.photos.photo,
          isLoading: false
        })
      })
      .catch( error => {
        //handle error
        console.log('Error fetching and parsing data: ', error);
      })

      //resetting isLoading to true so that 'Loading...' message show on any API call load.
      this.setState({isLoading: true});
  }

  componentDidMount() {
    this.navSearch();
    this.performSearch();
  }

  render() {
    console.log(this.state.photos);
    return (
      <BrowserRouter>
        <div className="container">
          <SearchForm onSearch={this.performSearch} isLoading={this.state.isLoading}/>
          <Nav fetchData={this.navSearch}/>
          <Switch> 
            <Route exact path='/search/:query' render={ (props) => <Gallery {...props} data={this.state.photos} query={this.state.queryString} isLoading={this.state.isLoading} fetchData={this.performSearch}/>} />
            <Route path='/sea' render={ (props) => <Gallery {...props} data={this.state.photos} query={this.state.queryString} isLoading={this.state.isLoading} fetchData={this.navSearch} /> } />  
            <Route path='/clouds' render={ (props) => <Gallery {...props} data={this.state.photos}  query={this.state.queryString} isLoading={this.state.isLoading} fetchData={this.navSearch} /> } />
            <Route path='/nature' render={ (props) => <Gallery {...props} data={this.state.photos}  query={this.state.queryString} isLoading={this.state.isLoading} fetchData={this.navSearch} /> } />
          </Switch>
        </div>
      </BrowserRouter> 
    );
  }
}

export default App;
