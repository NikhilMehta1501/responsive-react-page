import React from 'react';
import location_icon from '../../assets/img/location_icon.svg';
import pencil_icon from '../../assets/img/pencil.svg';
import info_icon from '../../assets/img/info_icon.svg';

const Sidebar = () => {
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
    </div>
  )
}

export default Sidebar
