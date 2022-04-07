import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './Dialogs.module.css'

const DialogItem = (props: any) => {
  let path = '/Dialogs/' + props.id
  return (
    <div className={s.dialog + ' ' + s.active}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  )
}

const Messege = (props: any) => {
  return <div className={s.message}>{props.message}</div>
}
const Dialogs = () => {
  return (
    <div>
      <div className={s.dialogs}>
        <div className={s.dialogItem}>
          <DialogItem name="Arkadiy" id="1" />
          <DialogItem name="Anufriy" id="2" />
          <DialogItem name="Evlampiy" id="3" />
          <DialogItem name="Sofija" id="4" />
          <DialogItem name="Akakiy" id="5" />
        </div>
        <div className={s.messages}>
          <Messege message="Hello" />
          <Messege message="How are you?" />
          <Messege message="Where you from?" />
          <Messege message="KokokoKokokoKokoko" />
          <Messege message="Kokoko" />
        </div>
      </div>
    </div>
  )
}

export default Dialogs
