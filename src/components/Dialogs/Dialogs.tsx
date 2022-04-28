import React from 'react'
import { DialogsPageType, DialogsType, RootStateType } from '../../Redux/State'
import DialogItem from './DialogItem/DialogItem'
import s from './Dialogs.module.css'
import Message from './Message/Message'

type DialogType = {
  dialogsPage: DialogsPageType
}

const Dialogs = (props: DialogType) => {
  let dialogsElements = props.dialogsPage.dialogs.map(
    (d: { name: string; id: number }) => <DialogItem name={d.name} id={d.id} />
  )
  let messagesElements = props.dialogsPage.messages.map(
    (m: { message: string; id: number }) => (
      <Message message={m.message} id={m.id} />
    )
  )
  let newMessegeElement = React.createRef<HTMLTextAreaElement>()

  let addMessage = () => {
    let text = newMessegeElement.current?.value
    alert(text)
  }

  return (
    <div>
      <div className={s.dialogs}>
        <div className={s.dialogItem}>{dialogsElements}</div>
        <div className={s.messages}>{messagesElements}</div>
        <textarea ref={newMessegeElement} value="hello" />
        <button className={s.button} onClick={addMessage}>
          send
        </button>
      </div>
    </div>
  )
}

export default Dialogs
