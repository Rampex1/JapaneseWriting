import React from 'react'
import "./Profile.css"
import user from '../../assets/img/default_user.png'
import badge from '../../assets/img/badge.png'
import User from '../../components/user/User';

function profile() {
  return (
    <section className='background'>
      <div className='grid'>
        <div className='left_container'>
          <div className='user_container'>
            <div><img className="user_profile" src={user} /></div>
            <div className='user_info'>
              <p className='username'>Username</p>
              <p className='join_date'>Joined January 1 2024</p>
            </div>
          </div>
          <div className='line'></div>
          <div className='vocab_grid'>
            <p className='vocab_title'>Trait Mastery</p>
            <div className='vocab_container'>
            
              <div className='lang_container'>
                <div className='lang_count'><p>5</p></div>
                <div className='lang_type'><p>Kanji</p></div>
              </div>
              <div className='lang_container'>
                <div className='lang_count'><p>11</p></div>
                <div className='lang_type'><p>Katakana</p></div>
              </div>
              <div className='lang_container'>
                <div className='lang_count'><p>5</p></div>
                <div className='lang_type'><p>Hiragana</p></div>
              </div>
            
          </div>
          </div>
          
          <div className='achievements_container'>
            <p className='achievement_title'>Achievements</p>
            <div className='badge_container'>
              <div className='badge'>
                <img src={badge} />
                <p>Achievement 1</p>
              </div>
              <div className='badge'>
                <img src={badge} />
                <p>Achievement 1</p>
              </div>
              <div className='badge'>
                <img src={badge} />
                <p>Achievement 1</p>
              </div>
            </div>
          </div>
        </div>
        <div className='right_container'>
          <div className='friends_container'>
            <div><p className='friends_list'>Friends List</p></div>
            <div className='friends_list_container'>
              <div className='friend_grid'>
                <User imgUrl={user} name="brudda"/> 
              </div>
              <div className='friend_grid'>
                <User imgUrl={user} name="Rampexx"/> 
              </div>
              <div className='friend_grid'>
                <User imgUrl={user} name="kvnnnn"/> 
              </div>
            </div>
          </div>
        </div>
      </div>`
    </section>
  )
}

export default profile
