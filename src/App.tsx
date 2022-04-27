import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import './App.css'
import Dialogs from './components/Dialogs/Dialogs'
import Friends from './components/Friends/Friends'
import Header from './components/Header/Header'
import Music from './components/Music/Music'
import Navbar from './components/Navbar/Navbar'
import News from './components/News/News'
import Profile from './components/Profile/Profile'
import Settings from './components/Settings/Settings'

const App = (props: any) => {
  return (
    <BrowserRouter>
      <div className="app-wraper">
        <Header />
        <Navbar state={props.state.navbarFriends} />
        <div className="app-wrapper-content">
          <Route
            path="/Dialogs"
            render={() => <Dialogs state={props.state.dialogsPage} />}
          />
          <Route
            path="/Profile"
            render={() => (
              <Profile
                updateNewPostText={props.updateNewPostText}
                profilePage={props.state.profilePage}
                addPost={props.addPost}
              />
            )}
          />
          <Route path="/News" render={() => <News />} />
          <Route path="/Music" render={() => <Music />} />
          <Route path="/Settings" render={() => <Settings />} />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
