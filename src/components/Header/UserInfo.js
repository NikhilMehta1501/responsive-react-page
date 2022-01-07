import React from 'react';
import down_arrow from '../../assets/img/down_arrow_solid.svg';
import user_profile from '../../assets/img/user.png';

const UserInfo = ({ isLoggedIn, setIsLoggedIn }) => {

  const handleLogout = () =>{
    setIsLoggedIn(false)
  }

  return (
    <div className="user-info">
      {
        isLoggedIn ?
        (
          <>
          <img className="user_profile" src={user_profile} alt="user_profile" />
          <button className="user-profile-btn dropdown-toggle" id='profile-dropdown' data-bs-toggle="dropdown" aria-expanded="false">
            <span>Sidharth Goyal</span>
            <img src={down_arrow} alt="down_arrow" className="ms-1"/>
          </button>
          <ul class="dropdown-menu" aria-labelledby="profile-dropdown">
            <li><button class="dropdown-item" onClick={handleLogout}>Logout</button></li>
          </ul>
          </>
        )
        :
        (
          <>
          <span>Create Account</span>
          <button className="login-btn" data-bs-toggle="modal" data-bs-target="#login-modal">
            <span>Its Free</span>
            <img src={down_arrow} alt="down_arrow" className="ms-1"/>
          </button>
          </>
        )
      }
    </div>
  )
}

export default UserInfo
