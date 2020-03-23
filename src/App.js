import React, { Component } from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect 
} from 'react-router-dom';

import axios from 'axios';
import config from './Config';
import './index.css';

//import components 
import Nav from './components/Nav';
import Gallery from './components/Gallery';
import SearchForm from './components/SearchForm';
import NotFound from './components/NotFound';


//const navQuery = 'sea%2C+clouds%2C+nature';

class App extends Component {

  constructor(props) {
    //binding THIS keyword to this class
    super(props);
    //initial props state
    this.state = {
      photos: [], 
      queryString: '',
      search: '',
      isLoading: true,
    }  
  }

  //retrieve data
  searching = (query) => {
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
  // performSearch = (query) => {
  //   const flickrURL = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${config.My_Key}&tags=${query}&per_page=24&format=json&nojsoncallback=1`;
    
  //   axios.get(flickrURL)
  //     .then( response => {
  //       //handle data
  //       this.setState({
  //         queryString: query,
  //         photos: response.data.photos.photo,
  //         isLoading: false
  //       })
  //       console.log(query);
  //     })
  //     .catch( error => {
  //       //handle error
  //       console.log('Error fetching and parsing data: ', error);
  //     })

  //     //resetting isLoading to true so that 'Loading...' message show on any API call load.
  //     this.setState({isLoading: true});
  // }

  componentDidMount() {
    this.searching('travel')
  }

  render() {
    console.log(this.state.photos);
    return ( 
      <BrowserRouter>
        <div className="container">
          <SearchForm onSearch={this.searching} isLoading={this.state.isLoading}/>
          <Nav fetchData={this.searching}/>

          <Switch>   
            <Route exact path='/' render={ (props) => <Redirect  to='/travel' isLoading={this.state.isLoading} /> } /> 
            <Route exact strict path='/search/:searchedQuery' render={ (props) => <Gallery {...props} data={this.state.photos} query={this.state.queryString} isLoading={this.state.isLoading} fetchData={this.searching}/>} />
            <Route exact strict path='/(travel|sea|clouds|nature)' render={ (props) => <Gallery {...props} data={this.state.photos} query={this.state.queryString} isLoading={this.state.isLoading} fetchData={this.searching} /> } />  
            <Route component={NotFound}/>
          </Switch>
        </div>
      </BrowserRouter> 
    );
  }
}

export default App;
