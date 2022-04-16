import React from 'react'

import s from './../Dialogs.module.css'

const Messege = (props: any) => {
  return (
    <div className={s.message}>
      <img src="https://proza.ru/pics/2016/07/30/174.jpg" />
      {props.message}
    </div>
  )
}

export default Messege
