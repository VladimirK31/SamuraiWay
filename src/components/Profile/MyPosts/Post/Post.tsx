import React from 'react'
import s from './Post.module.css'
const Post = (props: any) => {
  return (
    <div className={s.item}>
      <img src="http://risovach.ru/thumb/upload/200s400/2014/05/generator/ava_51385657_orig_.jpeg?vva5v" />
      {props.message}
      <div>
        <span> like</span> {props.likesCount}
      </div>
    </div>
  )
}

export default Post
