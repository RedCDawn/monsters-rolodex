import React from 'react';
import './search-box.style.css';

// functional component
// don't have access to state and therfore constructor - also no access to Life-cycle methods
// just render some html, this is the purpose 
export const SearchBox = ({ placeholder, onSearchChange}) => (
    <input
        className='search'
        type='search' 
        placeholder={placeholder}
        onChange={onSearchChange} 
        // onChange={e => this.setState({ searchField: e.target.value })} 
    />
);