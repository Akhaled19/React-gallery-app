import React from 'react';
//import PropTypes from 'prop-types';

//NotFound component for displaying a user friendly message when the 
//search return no results 
const NotFound = () => {
    return(
        <li className='not-found'>
            <h3>No Results Found</h3>
            <p>You search did not return any results. Please try again.</p>
        </li>
    );
}
export default NotFound;