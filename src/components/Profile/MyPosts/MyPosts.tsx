import React from 'react'
import s from './MyPosts.module.css'
import Post from './Post/Post'
const MyPosts = () => {
  return (
    <div className={s.post}>
      <h3>My posts</h3>
      <div>
        <textarea></textarea>
      </div>
      <div>
        <button className={s.button}>add</button>
      </div>
      <div className={s.posts}>
        <Post message="How are you?" likesCount="15" />
        <Post message="It's my first post!" likesCount="10" />
      </div>
    </div>
  )
}

export default MyPosts
