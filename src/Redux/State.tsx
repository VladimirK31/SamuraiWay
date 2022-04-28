import { v1 } from 'uuid'
import { rerenderEnteriTree } from '../render'

export type FriendsType = {
  id: string
  name: string
  images: string
}
export type PostsType = {
  id: string
  message: string
  likesCount: number
}
export type MessagesType = {
  id: string
  message: string
}
export type DialogsType = {
  id: string
  name: string
}
export type NavbarFriendsType = {
  friends: Array<FriendsType>
}
export type ProfilePageType = {
  newPostText: string
  posts: Array<PostsType>
}
export type DialogsPageType = {
  dialogs: Array<DialogsType>
  messages: Array<MessagesType>
}
export type RootStateType = {
  dialogsPage: DialogsPageType
  profilePage: ProfilePageType
  navbarFriends: NavbarFriendsType
}

export let state: RootStateType = {
  dialogsPage: {
    dialogs: [
      { id: v1(), name: 'Arkadiy' },
      { id: v1(), name: 'Anufriy' },
      { id: v1(), name: 'Evlampiy' },
      { id: v1(), name: 'Sofija' },
      { id: v1(), name: 'Akakiy' },
    ],
    messages: [
      { id: v1(), message: 'Hello' },
      { id: v1(), message: 'How are you?' },
      { id: v1(), message: 'Where you from?' },
      { id: v1(), message: 'KokokoKokokoKokoko' },
      { id: v1(), message: 'Kokoko' },
    ],
  },
  profilePage: {
    newPostText: 'Hello',
    posts: [
      { id: v1(), message: 'How are you?', likesCount: 15 },
      { id: v1(), message: "It's my first post!", likesCount: 10 },
    ],
  },
  navbarFriends: {
    friends: [
      { id: v1(), name: 'Arkadiy', images: 'IMG' },
      { id: v1(), name: 'Anufriy', images: 'IMG' },
      { id: v1(), name: 'Evlampiy', images: 'IMG' },
    ],
  },
}

export const addPost = () => {
  let newPost: PostsType = {
    id: v1(),
    message: state.profilePage.newPostText,
    likesCount: 0,
  }
  state.profilePage.posts.push(newPost)
  state.profilePage.newPostText = ''
  rerenderEnteriTree(state)
}
export const updateNewPostText = (newPostText: string) => {
  state.profilePage.newPostText = newPostText
  rerenderEnteriTree(state)
}
