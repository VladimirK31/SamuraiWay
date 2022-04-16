let state = {
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

export default state
