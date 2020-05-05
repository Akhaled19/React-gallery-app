import React from 'react';

//NoResultFound component for displaying a user friendly message when the 
//search return no results 
const NoResultFound = () => {
    return(
        <li className='not-found'>
            <h3>No Results Found</h3>
            <p>Your search did not return any results. Please try again.</p>
        </li>
    );
}
export default NoResultFound;