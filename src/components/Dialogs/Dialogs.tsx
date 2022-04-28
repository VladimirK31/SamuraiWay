import React from 'react'
import { DialogsPageType, DialogsType, RootStateType } from '../../Redux/State'
import DialogItem from './DialogItem/DialogItem'
import s from './Dialogs.module.css'
import Message from './Message/Message'

type DialogType = {
  newMessageText: string
  dialogsPage: DialogsPageType
  addMessage: () => void
  updateAddMessage: (newMessageText: string) => void
}

const Dialogs = (props: DialogType) => {
  let dialogsElements = props.dialogsPage.dialogs.map(
    (d: { name: string; id: string }) => <DialogItem name={d.name} id={d.id} />
  )
  let messagesElements = props.dialogsPage.messages.map(
    (m: { message: string; id: string }) => (
      <Message message={m.message} id={m.id} />
    )
  )
  let newMessegeElement = React.createRef<HTMLTextAreaElement>()

  let addMessage = () => {
    props.addMessage()
  }
  let inputMessegeText = () => {
    let newMessage = newMessegeElement.current
      ? newMessegeElement.current?.value
      : ''
    props.updateAddMessage(newMessage)
  }

  return (
    <div>
      <div className={s.dialogs}>
        <div className={s.dialogItem}>{dialogsElements}</div>
        <div className={s.messages}>{messagesElements}</div>
        <textarea
          onChange={inputMessegeText}
          ref={newMessegeElement}
          value={props.newMessageText}
        />
        <button className={s.button} onClick={addMessage}>
          send
        </button>
      </div>
    </div>
  )
}

export default Dialogs
