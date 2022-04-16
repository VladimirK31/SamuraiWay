import React from 'react'
import state from '../../Redux/State'
import s from './Friends.module.css'
function Friends(props: any) {
  debugger
  let friendsElements = props.state.map(
    (f: { name: any; images: any }) => f.name
  )
  return (
    <div>
      <div>Friends</div>
      <div className={s.frinds}> {friendsElements}</div>
    </div>
  )
}
export default Friends
