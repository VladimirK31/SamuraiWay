import React from 'react'
import MyPosts from './MyPosts/MyPosts'
import s from './Profile.module.css'
import Profile_Ava from './Profile_ava/Profile_ava'
const Profile = () => {
  return (
    <div>
      <Profile_Ava />
      <MyPosts />
    </div>
  )
}

export default Profile
