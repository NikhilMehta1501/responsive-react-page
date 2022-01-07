import React from 'react'
import GroupHeader from '../components/GroupPage/GroupHeader';
import GroupBody from '../components/GroupPage/GroupBody';

const GroupPage = ({isLoggedIn}) => {
  return (
    <div>
      <GroupHeader/>
      <GroupBody isLoggedIn={isLoggedIn}/>
    </div>
  )
}

export default GroupPage
