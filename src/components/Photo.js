import React from 'react';

//Photo component that displays the li and img elements 
const Photo = (props) => {
        return(
            <li>
                <img src={props.url} alt='' onClick={() => window.open(props.url)}/>
            </li>
        ); 
}
export default Photo;