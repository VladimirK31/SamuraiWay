import React from 'react'
import s from './Friends.module.css'
import { FriendsType, RootStateType } from '../../Redux/State'

type FriendType = {
  state: FriendsType[]
}

function Friends(props: FriendType) {
  let friendsElements = props.state.map((f: { name: string }) => f.name)
  return (
    <div>
      <h3>Friends</h3>
      <div className={s.friendsElements}>{friendsElements}</div>
    </div>
  )
}
export default Friends
