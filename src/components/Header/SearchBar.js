import React from 'react';
import search_icon from '../../assets/img/search-icon.svg';

function SearchBar() {

  return (
    <div className="search-bar">
      <img src={search_icon} alt="search_icon" className="search-icon-img ms-4"/>
      <input type="text" className="search-bar-input ms-2" placeholder="Search for your favorite groups in ATG"/>
    </div>
  )
}

export default SearchBar
