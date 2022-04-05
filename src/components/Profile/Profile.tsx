import React from 'react'
import MyPosts from './MyPosts/MyPosts'
import s from './Profile.module.css'
import Profile_Ava from './Profile_ava/Profile_ava'
const Profile = () => {
  return (
    <div>
      <div className={s.prof}>
        <img src="https://natworld.info/wp-content/uploads/2018/08/babochki-i-ptichki.jpg" />
      </div>
      <Profile_Ava />
      <MyPosts />
    </div>
  )
}

export default Profile
