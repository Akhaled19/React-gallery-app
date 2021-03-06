import React, { Component, Fragment } from 'react';
import {withRouter} from 'react-router-dom';
import Photo from './Photo';
import NoResultFound from './NoResultFound';


//photo container where data can be managed with state
class Gallery extends Component {
    constructor() {
        super();
        this.state = {
            oldValue:''
        };
    }

    componentDidUpdate(prevProps) {
        const {
          match: { params },
        } = this.props;
        

        const newValue = params && params[0];
        //if the state changes trigger the fetchData API
        if (newValue !== this.state.oldValue) {
          this.setState({ oldValue: newValue });
          this.props.fetchData(newValue);
        }
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
        //if there is no result show the NoResultFound component   
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