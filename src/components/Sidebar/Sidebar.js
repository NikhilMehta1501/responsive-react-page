import React from 'react';
import { useState } from 'react';
import location_icon from '../../assets/img/location_icon.svg';
import pencil_icon from '../../assets/img/pencil.svg';
import info_icon from '../../assets/img/info_icon.svg';
import like_icon from '../../assets/img/like_icon.svg';
import {recomended_group_0, recomended_group_1, recomended_group_2, recomended_group_3 } from '../../assets/img/recommendedGroups'

const Sidebar = ({isLoggedIn}) => {

  const [recommendedGroups, setRecommendedGroups] = useState([
    {
      id: 0,
      profileImg: recomended_group_0,
      name: 'Leisure'
    },
    {
      id: 1,
      profileImg: recomended_group_1,
      name: 'Activism'
    },
    {
      id: 2,
      profileImg: recomended_group_2,
      name: 'MBA'
    },
    {
      id: 3,
      profileImg: recomended_group_3,
      name: 'Philosophy'
    }
  ])

  return (
    <div className='sidebar'>
      <div className='location-search-div'>
        <img className='location-icon' src={location_icon} alt="location_icon" />
        <input className='location-input' type="text" defaultValue={'Noida, India'}/>
        <img className='pencil-icon' src={pencil_icon} alt="pencil_icon" />
      </div>
      <div className='sidebar-info-div'>
        <div className='info-icon'>
          <img src={info_icon} alt="info_icon" />
        </div>
        <span className='sidebar-info-text'>Your location will help us serve better and extend a personalised experience.</span>
      </div>
      
      { (isLoggedIn) &&
        <>
        <div className='recommended-groups-section'>
        <div className='recommended-groups-header'>
          <div className='recommended-groups-like-icon'>
            <img src={like_icon} alt="like_icon" />
          </div>
          <span className='recommended-groups-header-text'>RECOMMENDED GROUPS</span>
        </div>
        <div>
          {
            recommendedGroups.map( group => {
              return(
                <div className='recommended-group' key={group.id}>
                  <div className='recommended-group-img'>
                    <img src={group.profileImg} alt='group_profile' />
                  </div>
                  <div className='recommended-group-name'>
                    <span>{group.name}</span>
                  </div>
                  <div className='recommended-group-follow-btn'>
                    <button>Follow</button>
                  </div>
                </div>
              )
            } )
          }
        </div>
        <div className='recommended-groups-footer'>
          <button className='recommended-groups-footer-button'>See More...</button>
        </div>
      </div>
      </>
      }
    </div>
  )
}

export default Sidebar
