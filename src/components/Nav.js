import React from 'react';
import {NavLink} from 'react-router-dom';
//import PropTypes from 'prop-types';

//Nav component for the apps navigation links 
function Nav(props) {
    
    return(
       <nav className='main-nav'>
           <ul>
               <li><NavLink to=''>Sea</NavLink></li>
               <li><NavLink to=''>Clouds</NavLink></li>
               <li><NavLink to=''>Statue</NavLink></li>
           </ul>
       </nav>
    );
    
}
export default Nav;