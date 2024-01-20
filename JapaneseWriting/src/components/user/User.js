import React from 'react'
import user from '../../assets/img/default_user.png'
import './User.css';

const User = ({imgUrl, name}) => (
  <div className='friend_grid'>
    <div className='friend_profile'>
      <img className="user_profile_friend" src={imgUrl} />
    </div>
    <div className='friend_name_container'>
      <p className='friend_name'>{name} </p>
    </div>
  </div>
);


export default User;