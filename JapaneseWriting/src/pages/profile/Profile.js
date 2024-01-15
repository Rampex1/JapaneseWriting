import React from 'react'
import "./Profile.css"
import user from '../../assets/img/default_user.png'


function profile() {
  return (
    <div className='grid'>
      <div className='left_container'>
        <div className='user_container'>
          <div><img className="user_profile" src={user} /></div>
          <div className='user_info'>
            <p className='username'>Username</p>
            <p className='join_date'>Joined January 1 2024</p>
          </div>
          
        </div>
        <div className='vocab_container'>
          vocab
        </div>
        <div className='achievements_container'>
          achievements
        </div>
      </div>
      <div className='right_container'>
        <div className='friends_container'>
          <div><p className='friends_list'>Friends List</p></div>
          <div className='friends_list_container'>
            <div className='friend_grid'>
              <div className='friend_profile'>
                <img className="user_profile_friend" src={user} />
              </div>
              <div className='friend_name_container'>
                <p className='friend_name'>Rampexx</p>
              </div>
            </div>
            <div className='friend_grid'>
              <div className='friend_profile'>
                <img className="user_profile_friend" src={user} />
              </div>
              <div className='friend_name_container'>
                <p className='friend_name'>kvnnnnnnnn</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default profile
