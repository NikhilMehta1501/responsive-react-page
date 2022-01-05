import React from 'react';
import group_background_image from '../../assets/img/group_background_image.png';
import group_background_image_mobile from '../../assets/img/group_background_image_mobile.png';

const GroupHeader = () => {
  return (
    <div>
      <div className="group_background_image">
        <img className="group_background_image_desktop" src={group_background_image} alt="group_background_image"/>
        <img className="group_background_image_mobile" src={group_background_image_mobile} alt="group_background_image_mobile"/>
      </div>
      <div className="group-info">
        <span className="group-name">Computer Engineering</span>
        <span className="group-sub-heading">142,765 Computer Engineers follow this</span>
      </div>
    </div>
  )
}

export default GroupHeader
