import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

let posts = [
  { id: 1, message: 'How are you?', likesCount: 15 },
  { id: 1, message: "It's my first post!", likesCount: 10 },
]
let dialogs = [
  { id: 1, name: 'Arkadiy' },
  { id: 2, name: 'Anufriy' },
  { id: 3, name: 'Evlampiy' },
  { id: 4, name: 'Sofija' },
  { id: 5, name: 'Akakiy' },
]

let messages = [
  { id: 1, message: 'Hello' },
  { id: 2, message: 'How are you?' },
  { id: 3, message: 'Where you from?' },
  { id: 4, message: 'KokokoKokokoKokoko' },
  { id: 5, message: 'Kokoko' },
]
ReactDOM.render(
  <App posts={posts} messages={messages} dialogs={dialogs} />,
  document.getElementById('root')
)
