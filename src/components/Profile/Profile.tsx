import React from 'react'
import MyPosts from './MyPosts/MyPosts'
import s from './Profile.module.css'
import Profile_Ava from './Profile_ava/Profile_ava'
const Profile = () => {
  return (
    <div>
      <div>
        <img src="https://i0.wp.com/css-tricks.com/wp-content/uploads/2018/06/react-ideal-image.png?fit=1200%2C600&ssl=1" />
      </div>
      <Profile_Ava />
      <MyPosts />
    </div>
  )
}

export default Profile
