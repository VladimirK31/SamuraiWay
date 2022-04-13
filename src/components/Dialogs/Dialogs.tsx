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
  let dialogs = [
    { id: 1, name: 'Arkadiy' },
    { id: 2, name: 'Anufriy' },
    { id: 3, name: 'Evlampiy' },
    { id: 4, name: 'Sofija' },
    { id: 5, name: 'Akakiy' },
  ]

  let messages = [
    { id: 1, message: 'Hello' },
    { id: 2, message: 'How are you?' },
    { id: 3, message: 'Where you from?' },
    { id: 4, message: 'KokokoKokokoKokoko' },
    { id: 5, message: 'Kokoko' },
  ]

  let dialogsElements = dialogs.map((d) => (
    <DialogItem name={d.name} id={d.id} />
  ))
  let messagesElements = messages.map((m) => <Messege message={m.message} />)

  return (
    <div>
      <div className={s.dialogs}>
        <div className={s.dialogItem}>{dialogsElements}</div>
        <div className={s.messages}>{messagesElements}</div>
      </div>
    </div>
  )
}

export default Dialogs
