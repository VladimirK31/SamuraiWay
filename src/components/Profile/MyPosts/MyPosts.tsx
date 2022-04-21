import React from 'react'
import s from './MyPosts.module.css'
import Post from './Post/Post'
const MyPosts = (props: any) => {
  let postsElements = props.posts.map(
    (p: { message: any; likesCount: any }) => (
      <Post
        message={p.message}
        likesCount={p.likesCount}
        addPost={props.addPost}
      />
    )
  )
  let newPostElement = React.createRef<HTMLTextAreaElement>()
  let addPost = () => {
    let text = newPostElement.current?.value
    props.addPost(text)
  }

  return (
    <div className={s.post}>
      <h3>My posts</h3>
      <div>
        <textarea ref={newPostElement}></textarea>
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
