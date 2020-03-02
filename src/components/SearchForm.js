import React, { Component } from 'react';
//import PropTypes from 'prop-types';

//SearchForm component where data can be managed with state
class SearchForm extends Component{

    state = {
        searchText: ''
    }

    onSearchChange = e => {
        this.setState({
            searchText: e.target.value
        })
    }
    
    handleSubmit = e => {
        e.preventDefault();
        this.props.onSearch(this.state.searchText);
        e.currentTarget.reset();
    }
    
    render() {
        return(
            <form className='search-form' onSubmit={this.handleSubmit} >
                <input
                    type='search'
                    placeholder='Search...'
                    onChange={this.onSearchChange}
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