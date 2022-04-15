import React from 'react'

import s from './../Dialogs.module.css'

const Messege = (props: any) => {
  return <div className={s.message}>{props.message}</div>
}

export default Messege
