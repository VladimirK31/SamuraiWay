import React from 'react'
import s from './Profile_ava.module.css'

const Profile_Ava = () => {
  return (
    <>
      <div className={s.profile}>
        <img src="https://natworld.info/wp-content/uploads/2018/08/babochki-i-ptichki.jpg" />
      </div>
      <span className={s.prof}>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHCZuslFbn42wwA9qw6ywBERhtpr_yOFy3Cw&usqp=CAU" />
        <ul className={s.prof}>
          <li>Name</li>
          <li>age</li>
          <li>city</li>
        </ul>
      </span>
    </>
  )
}

export default Profile_Ava
