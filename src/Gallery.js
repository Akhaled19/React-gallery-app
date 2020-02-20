import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Photo from './Photo';


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