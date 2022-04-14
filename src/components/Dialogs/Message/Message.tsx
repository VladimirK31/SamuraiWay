import React from 'react'
import { MessagesPropsType } from '../Dialogs'
import s from './../Dialogs.module.css'

const Messege = (props: MessagesPropsType) => {
  return <div className={s.message}>{props.message}</div>
}

export default Messege
