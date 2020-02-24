import React, { Component } from 'react';
//import PropTypes from 'prop-types';

//SearchForm component where data can be managed with state
class SearchForm extends Component{
    /*UserInput = React.createRef();
    handleSubmit = (e) => {
        e.preventDefault();
        this.props
    }
    */
    render() {
        return(
            <form className='search-form'>
                <input
                    type='text'
                    placeholder='Search'
                />
                <button 
                    type='submit'
                    className='search-button'
                />
            </form>
        );
    };

}
export default SearchForm;