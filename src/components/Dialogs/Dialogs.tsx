import React from 'react'
import DialogItem from './DialogItem/DialogItem'
import s from './Dialogs.module.css'
import Message from './Message/Message'

export type DialogsPropsType = {
  id: number
  name: string
}
export type MessagesPropsType = {
  id: number
  message: string
}

export let dialogs = [
  { id: 1, name: 'Arkadiy' },
  { id: 2, name: 'Anufriy' },
  { id: 3, name: 'Evlampiy' },
  { id: 4, name: 'Sofija' },
  { id: 5, name: 'Akakiy' },
]

export let messages = [
  { id: 1, message: 'Hello' },
  { id: 2, message: 'How are you?' },
  { id: 3, message: 'Where you from?' },
  { id: 4, message: 'KokokoKokokoKokoko' },
  { id: 5, message: 'Kokoko' },
]

const Dialogs = () => {
  let dialogsElements = dialogs.map((d) => (
    <DialogItem name={d.name} id={d.id} />
  ))
  let messagesElements = messages.map((m) => (
    <Message message={m.message} id={m.id} />
  ))

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
