import React from 'react'
import MyPosts from './MyPosts/MyPosts'
import s from './Profile.module.css'
import Profile_Ava from './Profile_ava/Profile_ava'

const Profile = (props: any) => {
  return (
    <div>
      <Profile_Ava />
      <MyPosts posts={props.posts} />
    </div>
  )
}

export default Profile
