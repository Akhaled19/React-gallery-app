import React, { Component, Fragment } from 'react';
import {withRouter} from 'react-router-dom';
//import PropTypes from 'prop-types';
import Photo from './Photo';
import NoResultFound from './NoResultFound';


//photo container where data can be managed with state
class Gallery extends Component {

    componentDidMount() {
        const { match: {params} } = this.props;
       //let routeName = this.props.history.location.pathname.replace('/', '');
       this.props.fetchData(params.searchedQuery);
       //console.log(routeName);
    } 

    render() {
        const result = this.props.data;
        let photoArray;
        let title = this.props.query;

        if(result.length > 0) {
            photoArray =  result.map(photo => {
                const url = `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_c.jpg`;
                console.log(photoArray);
                return(
                        <Photo url={url} key={photo.id}/>
                );
            });    
        } else {
            
            photoArray = <NoResultFound />
            
        }    
    
        return(
            <div className='photo-container'>
                {
                    (this.props.isLoading)
                    ? <p className='loading'></p>
                    :
                    <Fragment>
                        <h2>{title}</h2>
                        <ul>
                            {photoArray}
                        </ul>
                    </Fragment>
                }
                     
            </div>
        );
    
    }
    
}
export default withRouter(Gallery);