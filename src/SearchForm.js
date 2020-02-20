import React, { Component } from 'react';
import PropTypes from 'prop-types';

//SearchForm component where data can be managed with state
class SearchForm extends Component{
    UserInput = React.createRef();
    handleSubmit = (e) => {
        e.preventDefault();
        this.props
    }
    render() {
        return(
            <form className='saerch-form'>
                <input
                    type='text'
                    placeholder='Search'
                />
                <input 
                    type='submit'

                />
            </form>
        );
    };

}
export default SearchForm;