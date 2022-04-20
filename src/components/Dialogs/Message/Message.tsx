import React from 'react'

import s from './../Dialogs.module.css'

let newMessegeElement = React.createRef<HTMLTextAreaElement>()

const Messege = (props: any) => {
  let addMessage = () => {
    let text = newMessegeElement.current?.value
    alert(text)
  }

  return (
    <div className={s.message}>
      <img src="https://proza.ru/pics/2016/07/30/174.jpg" />
      {props.message}
      <textarea ref={newMessegeElement}></textarea>
      <button onClick={addMessage}>+</button>
    </div>
  )
}

export default Messege
