import React from 'react';
import SearchBar from './SearchBar';
import UserInfo from './UserInfo';
import atg_logo from '../../assets/img/atg_logo.svg';
import arrow_back from '../../assets/img/arrow_back.svg';

const Header = ({isLoggedIn}) => {
  return (
    <>
    <header className="App-header">
      <img className="arrow_back" src={arrow_back} alt="arrow_back"/>
      <button className="join-group-header-btn">Join Group</button>

      <img className="atg-logo" src={atg_logo} alt="atg_logo"/>
      <SearchBar/>
      <UserInfo isLoggedIn={isLoggedIn}/>
    </header>
    </>
  )
}

export default Header