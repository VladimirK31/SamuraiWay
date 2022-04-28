import { rerenderEnteriTree } from '../render'

export type FriendsType = {
  id: number
  name: string
  images: string
}
export type PostsType = {
  id: number
  message: string
  likesCount: number
}
export type MessagesType = {
  id: number
  message: string
}
export type DialogsType = {
  id: number
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
      { id: 1, name: 'Arkadiy' },
      { id: 2, name: 'Anufriy' },
      { id: 3, name: 'Evlampiy' },
      { id: 4, name: 'Sofija' },
      { id: 5, name: 'Akakiy' },
    ],
    messages: [
      { id: 1, message: 'Hello' },
      { id: 2, message: 'How are you?' },
      { id: 3, message: 'Where you from?' },
      { id: 4, message: 'KokokoKokokoKokoko' },
      { id: 5, message: 'Kokoko' },
    ],
  },
  profilePage: {
    newPostText: 'Hello',
    posts: [
      { id: 1, message: 'How are you?', likesCount: 15 },
      { id: 1, message: "It's my first post!", likesCount: 10 },
    ],
  },
  navbarFriends: {
    friends: [
      { id: 1, name: 'Arkadiy', images: 'IMG' },
      { id: 2, name: 'Anufriy', images: 'IMG' },
      { id: 3, name: 'Evlampiy', images: 'IMG' },
    ],
  },
}

export const addPost = () => {
  let newPost: PostsType = {
    id: 3,
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
