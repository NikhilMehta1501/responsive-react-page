import React from 'react';
import dropdown_icon from '../../assets/img/dropdown.svg';
import views_icon from '../../assets/img/views_icon.svg';
import share_icon from '../../assets/img/share.svg';
import location_icon from '../../assets/img/location_icon.svg';
import job_icon from '../../assets/img/job_icon.svg';
import calender_icon from '../../assets/img/calender_icon.svg';

const GroupPost = ({post}) => {

  // {
  //   id : 1,
  //   backgroundImage : post1_image,
  //   postType : '🔬️ Education',
  //   postHeading : 'Tax Benefits for Investment under National Pension Scheme launched by Government',
  //   postText : 'I’ve worked in UX for the better part of a decade. From now on, I plan to rei…',
  //   location : null,
  //   date : null,
  //   author : 'Sarah West',
  //   company_name : null,
  //   authorProfileImage : author1_image,
  //   postViews : 1.4
  // }

  return (
    <div className="group-post">
      { ( post.postType != '💼️ Job' ) && <>
        <div className="post-header">
          <img src={post.backgroundImage} alt="post_background"/>
          <div className="post-type-div">
            <span>{post.postType}</span>
          </div>
        </div>
      </>
      }
      <div className='post-body'>
        <div className='post-heading-div'>
          <span>{post.postHeading}</span>
          <div className="dropdown">
            <button className="btn dropdown-toggle" type="button" id={"dropdownMenuButton-" + post.id} data-bs-toggle="dropdown" aria-expanded="false">
              <img src={dropdown_icon} alt="dropdown_icon" />
            </button>
            <ul className="dropdown-menu" aria-labelledby={"dropdownMenuButton-" + post.id}>
              <li><button className="dropdown-item">Edit</button></li>
              <li><button className="dropdown-item">Report</button></li>
              <li><button className="dropdown-item">Action 3</button></li>
            </ul>
          </div>
        </div>
        { ( post.postType == '✍️ Article' || post.postType == '🔬️ Education') && <>    
            <div className='post-text-div'>
              <span>{post.postText}</span>
            </div>
          </>
        }
        { ( post.postType == '🗓️ Meetup' ) && <>
            <div className='meetup-job-info-div'>
              <div className='location-date-div'>
                <div className='location'>
                  <img src={calender_icon} alt="calender_icon" />
                  <span>{post.date}</span>
                </div>
                <div className='date'>
                  <img src={location_icon} alt="location_icon" />
                  <span>{post.location}</span>
                </div>
              </div>
              <div className='post-link-btn'>
                <button style={{ color: '#E56135' }}>Visit Website</button>
              </div>
            </div>
          </>
        }
        { ( post.postType == '💼️ Job' ) && <>
            <div className='meetup-job-info-div'>
              <div className='location-date-div'>
                <div className='company-name'>
                  <img src={job_icon} alt="job_icon" />
                  <span>{post.company_name}</span>
                </div>
                <div className='date'>
                  <img src={location_icon} alt="location_icon" />
                  <span>{post.location}</span>
                </div>
              </div>
              <div className='job-link-btn'>
                <button style={{ color: '#02B875' }}>Apply on Timesjobs</button>
              </div>
            </div>
          </>
        }
      </div>

      <div className='post-footer'>
        <div className='author-info-div'>
          <img className='author-profile-image' src={post.authorProfileImage} alt="authorProfileImage" />
          <span className='author-name'>{post.author}</span>
        </div>
        <div className='post-info-div'>
          <div className="post-view-count">
            <img className='views-icon' src={views_icon} alt="views_icon"/>
            <span className='views-count'>{post.postViews}K views</span>
          </div>
          <div className='share-btn-div'>
            <button className='share-btn'>
              <img src={share_icon} alt="share_icon" />
            </button>
          </div>
        </div>
      </div>

    </div>
  )
}

export default GroupPost
