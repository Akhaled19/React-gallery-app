import React from 'react';


//NotFound component for displaying a user friendly message when the 
//URL Parameters search return no results
//added a Return Home button 
const NotFound = () => (
    <div className='not-found'>
        <h2>Page Not Found</h2> 
        <a href='/'>Return Home</a>   
    </div>
);
export default NotFound;