import React from 'react';
import down_arrow from '../../assets/img/down_arrow_solid.svg';
import user_profile from '../../assets/img/user.png';

const UserInfo = ({ isLoggedIn }) => {
  return (
    <div className="user-info">
      {
        isLoggedIn ?
        (
          <>
          <img className="user_profile" src={user_profile} alt="user_profile" />
          <button className="user-profile-btn">
            <span>Sidharth Goyal</span>
            <img src={down_arrow} alt="down_arrow" className="ms-1"/>
          </button>
          </>
        )
        :
        (
          <>
          <span>Create Account</span>
          <button className="login-btn">
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
