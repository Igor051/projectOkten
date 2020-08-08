import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

type PostType = {
    id: number
    message: string
    likesCount: string
}

type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string
}

type DialogType = {
    id: number
    name: string
    img: string
}

type MessageType = {
    id: number
    message: string
}

export type MessagesType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    newMessageText: string
}

 type StateType = {
    profilePage: ProfilePageType
    messagesPage: MessagesType
    sidebar: {}
}

type StoreType = {
    _state: StateType
    _callSubscriber: (state:StateType) => void
    getState: () => StateType
    subscribe: (observer: any) => void
    dispatch: (action: any) => void
}

let store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hello friend', likesCount: '8'},
                {id: 2, message: 'Hi, bro. How are you ?', likesCount: '22'}
            ],
            newPostText: ''
        },

        messagesPage: {
            dialogs: [
                {
                    id: 1,
                    name: 'Igor',
                    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSykVpXr9GJjfUAb9CfZOyKMfNSEJ4DTm_Sv8_xAHybonO_Gb9V'
                },
                {
                    id: 2,
                    name: 'Sasha',
                    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRx5BHm-ymYeON0SJLFZrR5uV6jVmVyvwXnht_nEdGDN5etLNlH'
                },
                {
                    id: 3,
                    name: 'Petya',
                    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRrb57x3F0FPNjMIf_B5_fedb8JH-WVH3w8pdD_u0X8Lkc1kd_V'
                },
                {id: 4, name: 'Maksym', img: 'https://i.pinimg.com/236x/52/4e/91/524e910da5483d1dbb8a179c8c06e1de.jpg'}
            ],
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'How are you ?'},
                {id: 3, message: 'I am fine'},
                {id: 4, message: 'YO'}
            ],
            newMessageText: ''
        },

        sidebar: {}
    },
    _callSubscriber(state) {
        console.log('state changed')
    },

    getState() {
        return this._state
    },
    subscribe(observer: any) {
        this._callSubscriber = observer
    },

    dispatch(action: any) {
        // @ts-ignore
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        // @ts-ignore
        this._state.messagesPage = dialogsReducer(this._state.messagesPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)

        this._callSubscriber(this._state)
    }
}


 export default store
// @ts-ignore
window.store = store