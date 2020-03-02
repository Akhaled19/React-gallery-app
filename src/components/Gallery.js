import React, { Component } from 'react';
//import PropTypes from 'prop-types';
import Photo from './Photo';
import NotFound from './NotFound';


//photo container where data can be managed with state
class Gallery extends Component {

    render() {
        const result = this.props.data;
        console.log(result);
        let photoArray;
        if(result.length > 0) {
            photoArray =  result.map(photo => {
                const url = `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`;
                console.log(photoArray);
                return(
                        <Photo url={url} key={photo.id}/>
                );
            });    
        } else {
            return(
                <NotFound />
            );
        }    
    
        return(
            <div className='photo-container'>
                <h2>Results</h2>
                <ul>
                    {photoArray}
                </ul>     
            </div>
        );
    
    }
    
}
export default Gallery;