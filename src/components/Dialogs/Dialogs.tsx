import React from 'react'
import DialogItem from './DialogItem/DialogItem'
import s from './Dialogs.module.css'
import Message from './Message/Message'

const Dialogs = (props: any) => {
  let dialogsElements = props.state.dialogs.map((d: { name: any; id: any }) => (
    <DialogItem name={d.name} id={d.id} />
  ))
  let messagesElements = props.state.messages.map(
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
