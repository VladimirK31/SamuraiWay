import React, { createRef } from 'react'
import { PostsType, ProfilePageType, RootStateType } from '../../../Redux/State'
import s from './MyPosts.module.css'
import Post from './Post/Post'

type MyPostsType = {
  newPostText: string
  posts: Array<PostsType>
  addPost: () => void
  updateNewPostText: (newText: string) => void
}

const MyPosts = (props: MyPostsType) => {
  let postsElements = props.posts.map(
    (p: { message: string; likesCount: number }) => (
      <Post
        message={p.message}
        likesCount={p.likesCount}
        addPost={props.addPost}
      />
    )
  )
  let newPostElement = createRef<HTMLTextAreaElement>()
  let addPost = () => {
    props.addPost()
  }

  let changePostText = () => {
    let text = newPostElement.current ? newPostElement.current?.value : ''
    props.updateNewPostText(text)
  }

  return (
    <div className={s.post}>
      <h3>My posts</h3>
      <div>
        <textarea
          onChange={changePostText}
          ref={newPostElement}
          value={props.newPostText}
        />
      </div>
      <div>
        <button className={s.button} onClick={addPost}>
          add
        </button>
      </div>
      <div className={s.posts}>{postsElements}</div>
    </div>
  )
}

export default MyPosts
