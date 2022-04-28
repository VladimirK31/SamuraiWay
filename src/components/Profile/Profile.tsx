import React from 'react'
import { ProfilePageType, RootStateType } from '../../Redux/State'
import MyPosts from './MyPosts/MyPosts'
import s from './Profile.module.css'
import Profile_Ava from './Profile_ava/Profile_ava'

type ProfileType = {
  addPost: () => void
  profilePage: ProfilePageType
  updateNewPostText: (newText: string) => void
}

const Profile = (props: ProfileType) => {
  return (
    <div>
      <Profile_Ava />
      <MyPosts
        updateNewPostText={props.updateNewPostText}
        posts={props.profilePage.posts}
        addPost={props.addPost}
        newPostText={props.profilePage.newPostText}
      />
    </div>
  )
}

export default Profile
