import React from 'react';
import { useState } from 'react';
import GroupPostsFilter from '../GroupPage/GroupPostsFilter';
import GroupPost from '../GroupPage/GroupPost';
import Sidebar from '../Sidebar/Sidebar';
import { post0_image, post1_image, post2_image } from '../../assets/img/postImages'
import { author0_image, author1_image, author2_image, author3_image } from '../../assets/img/authorImages'

const GroupBody = ({isLoggedIn}) => {

  const [posts, setPosts] = useState([
    {
      id : 0,
      backgroundImage : post0_image,
      postType : '✍️ Article',
      postHeading : 'What if famous brands had regular fonts? Meet RegulaBrands!',
      postText : 'I’ve worked in UX for the better part of a decade. From now on, I plan to rei…',
      location : null,
      date : null,
      company_name : null,
      author : 'Sarthak Kamra',
      authorProfileImage : author0_image,
      postViews : 1.4
    },
    {
      id : 1,
      backgroundImage : post1_image,
      postType : '🔬️ Education',
      postHeading : 'Tax Benefits for Investment under National Pension Scheme launched by Government',
      postText : 'I’ve worked in UX for the better part of a decade. From now on, I plan to rei…',
      location : null,
      date : null,
      company_name : null,
      author : 'Sarah West',
      authorProfileImage : author1_image,
      postViews : 1.4
    },
    {
      id : 2,
      backgroundImage : post2_image,
      postType : '🗓️ Meetup',
      postHeading : 'Finance & Investment Elite Social Mixer @Lujiazui',
      postText : null,
      location : 'Ahmedabad, India',
      date : 'Fri, 12 Oct, 2018',
      company_name : null,
      author : 'Ronal Jones',
      authorProfileImage : author2_image,
      postViews : 1.4
    },
    {
      id : 3,
      backgroundImage : null,
      postType : '💼️ Job',
      postHeading : 'Finance & Investment Elite Social Mixer @Lujiazui',
      postText : null,
      location : 'Noida, India',
      date : null,
      company_name : 'Innovaccer Analytics Private Ltd.',
      author : 'Joseph Gray',
      authorProfileImage : author3_image,
      postViews : 1.4
    },
  ])

  return (
    <div className="group-body">
      <GroupPostsFilter/>
      <div className='group-page-body'>
        <div className="group-posts-div">
          { posts.map( (post) => <GroupPost key={post.id} post={post}/> ) }
        </div>
        <Sidebar isLoggedIn={isLoggedIn}/>
      </div>
    </div>
  )
}

export default GroupBody
