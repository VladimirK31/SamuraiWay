import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './../Dialogs.module.css'

const DialogItem = (props: any) => {
  let path = '/Dialogs/' + props.id
  return (
    <div className={s.dialogs + ' ' + s.active}>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHCZuslFbn42wwA9qw6ywBERhtpr_yOFy3Cw&usqp=CAU" />
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  )
}

export default DialogItem
