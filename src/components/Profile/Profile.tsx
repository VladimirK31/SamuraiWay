import React from 'react'
import MyPosts from './MyPosts/MyPosts'
import s from './Profile.module.css'
import Profile_Ava from './Profile_ava/Profile_ava'

export type postsTypeProps = {
  id: number
  message: string
  likesCount: number
}

export let posts = [
  { id: 1, message: 'How are you?', likesCount: 15 },
  { id: 1, message: "It's my first post!", likesCount: 10 },
]

const Profile = () => {
  return (
    <div>
      <Profile_Ava />
      <MyPosts />
    </div>
  )
}

export default Profile
