import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import {
  addMessage,
  addPost,
  RootStateType,
  updateAddMessage,
  updateNewPostText,
} from './Redux/State'
import { BrowserRouter } from 'react-router-dom'

export let rerenderEnteriTree = (state: RootStateType) => {
  ReactDOM.render(
    <BrowserRouter>
      <App
        updateAddMessage={updateAddMessage}
        addMessage={addMessage}
        state={state}
        addPost={addPost}
        updateNewPostText={updateNewPostText}
      />
      ,
    </BrowserRouter>,
    document.getElementById('root')
  )
}
