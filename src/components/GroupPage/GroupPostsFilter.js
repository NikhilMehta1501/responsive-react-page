import React from 'react';
import { useState } from 'react';
import join_group_icon from '../../assets/img/join_group.svg'

const GroupPostsFilter = () => {

  const [currentFilter, setCurrentFilter] = useState('all');

  return (
    <div>
      <div className="desktop-filter">
        <ul className="nav nav-tabs">
          <li className="filter-item">
            <button className={"filter-btn " + (currentFilter == 'all' ? "active" : "")} aria-current="page" onClick={() => setCurrentFilter('all')}>All Posts(38)</button>
          </li>
          <li className="filter-item">
            <button className={"filter-btn " + (currentFilter == 'article' ? "active" : "")} onClick={() => setCurrentFilter('article')}>Article</button>
          </li>
          <li className="filter-item">
            <button className={"filter-btn " + (currentFilter == 'event' ? "active" : "")} onClick={() => setCurrentFilter('event')}>Event</button>
          </li>
          <li className="filter-item">
            <button className={"filter-btn " + (currentFilter == 'education' ? "active" : "")} onClick={() => setCurrentFilter('education')}>Education</button>
          </li>
          <li className="filter-item">
            <button className={"filter-btn " + (currentFilter == 'job' ? "active" : "")} onClick={() => setCurrentFilter('job')}>Job</button>
          </li>
        </ul>

        <div className="group-btns">
          <select name="write-post-btn" className="write-post-btn">
            <option value="">Write a Post</option>
            <option value="article">Article</option>
            <option value="event">Event</option>
            <option value="education">Education</option>
            <option value="job">Job</option>
          </select>
          <button className="join-group-btn">
            <img src={join_group_icon} alt="join_group_icon" />
            <span className="ms-2">Join Group</span>
          </button>
        </div>
      </div>

      <div className="mobile-filter-div">
        <span>Posts(368)</span>
        <select name="mobile-filter" id="mobile-filter">
            <option value="all">All Posts</option>
            <option value="article">Article</option>
            <option value="event">Event</option>
            <option value="education">Education</option>
            <option value="job">Job</option>
        </select>
      </div>
    </div>
  )
}

export default GroupPostsFilter
