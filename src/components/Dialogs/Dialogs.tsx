import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './Dialogs.module.css'

const Dialogs = () => {
  return (
    <div>
      <div className={s.dialogs}>
        <div className={s.dialogItem}>
          <div className={s.dialog + ' ' + s.active}>
            <NavLink to="/Dialogs/1">Arkadiy</NavLink>
          </div>
          <div className={s.dialog}>
            <NavLink to="/Dialogs/2">Anufriy</NavLink>
          </div>
          <div className={s.dialog}>
            <NavLink to="/Dialogs/3">Evlampiy</NavLink>
          </div>
          <div className={s.dialog}>
            <NavLink to="/Dialogs/4">Sofija</NavLink>
          </div>
          <div className={s.dialog}>
            <NavLink to="/Dialogs/5">Akakiy</NavLink>
          </div>
        </div>
        <div className={s.messages}>
          <div className={s.message}>Hello</div>
          <div className={s.message}>How are you?</div>
          <div className={s.message}>Where you from?</div>
          <div className={s.message}>Kokoko</div>
        </div>
      </div>
    </div>
  )
}

export default Dialogs
