import React from 'react';
import {NavLink} from 'react-router-dom';

//Nav component for the apps navigation links 
const Nav = (props) => {
    
    return(
            <nav className='main-nav'>
                <ul className='list-inline'>
                    <li><NavLink to='/sea' onClick={ () => props.fetchData('sea')}>Sea</NavLink></li>
                    <li><NavLink to='/clouds' onClick={ () => props.fetchData('pink cloud')}>Clouds</NavLink></li>
                    <li><NavLink to='/nature' onClick={ () => props.fetchData('nature')}>Nature</NavLink></li>
                </ul>
            </nav>
    );
}
export default Nav;