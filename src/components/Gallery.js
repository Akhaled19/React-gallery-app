import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Photo from './Photo';
import NotFound from './NotFound';

//photo container where data can be managed with state
class Gallery extends Component {
    render() {
        return(
            <div className='photo-container'>
                <h2>Results</h2>
                <ul>
                    <Photo />
                </ul>     
            </div>
        );
    }
}
export default Gallery;