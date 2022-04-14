import React from 'react'
import { NavLink } from 'react-router-dom'
import { DialogsPropsType } from '../Dialogs'
import s from './../Dialogs.module.css'

const DialogItem = (props: DialogsPropsType) => {
  let path = '/Dialogs/' + props.id
  return (
    <div className={s.dialogs + ' ' + s.active}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  )
}

export default DialogItem
