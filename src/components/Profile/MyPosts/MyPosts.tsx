import React from 'react'
import { posts, postsTypeProps } from '../Profile'
import s from './MyPosts.module.css'
import Post from './Post/Post'
const MyPosts = () => {
  let postsElements = posts.map((p) => (
    <Post message={p.message} likesCount={p.likesCount} />
  ))

  return (
    <div className={s.post}>
      <h3>My posts</h3>
      <div>
        <textarea></textarea>
      </div>
      <div>
        <button className={s.button}>add</button>
      </div>
      <div className={s.posts}>{postsElements}</div>
    </div>
  )
}

export default MyPosts
