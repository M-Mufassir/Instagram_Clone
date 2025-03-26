import React from 'react'
import { useNavigate } from 'react-router-dom';

function SideBar() {

  const navigate = useNavigate(); 

  return (
    <div className='m-3 position-fixed'>
          <div className='d-flex flex-column gap-3'>
              <img className="logo-text" src='src\assets\Insta_Text.png' alt=''></img>
              <div><i className="bi bi-house-door"></i> Home</div>
              <div><i className="bi bi-search"></i> Search</div>
              <div><i className="bi bi-compass"></i> Explore</div>
              <div><i className="bi bi-collection-play"></i> Reels</div>
              <div><i className="bi bi-chat-square-quote"></i> Message</div>
              <div><i className="bi bi-heart"></i> Notifications</div>
              <div><i className="bi bi-plus-square"></i> Create</div>
              <div onClick={()=>{navigate('/profile')}}><i className="bi bi-person"></i> Profile</div>
          </div>
          <div className='position-fixed bottom-0 d-flex flex-column gap-3 mb-3'>
            <div><i className="bi bi-threads"></i> Threads</div>
            <div><i className="bi bi-list"></i> More</div>
        </div>
    </div>
  )
}

export default SideBar;