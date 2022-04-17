import React from 'react'
import s from './Friends.module.css'
function Friends(props: any) {
  let friendsElements = props.state.map((f: { name: any }) => f.name)
  return (
    <div>
      <h3>Friends</h3>
      <div className={s.friendsElements}>{friendsElements}</div>
    </div>
  )
}
export default Friends
