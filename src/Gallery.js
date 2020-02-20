import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Photo from './Photo';

//photo container where data can be managed with state
class Gallery extends Component {
    render() {
        return(
            <div className='photo-container'>
                <Photo />
            </div>
        );
    }
}
export default Gallery;