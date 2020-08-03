const ADD_MESSAGE = 'ADD_MESSAGE';

type dialogsType = {
    id: number
    name: string
    img: string
}

type messagesType = {
    id: number
    message: string
}

type initialStateType = {
    dialogs: Array<dialogsType>
    messages: Array<messagesType>
}


let initialState: initialStateType = {
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
    ]
};

const dialogsReducer = (state = initialState, action: any): initialStateType => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage: messagesType = {
                id: 5, message: action.newMessageBody
            };
            return {
                ...state,
                messages: [...state.messages, newMessage]
            };
        default:
            return state
    }

};

type AddMessageActionType = {
    type: typeof ADD_MESSAGE
    newMessageBody: string
}
export const addMessageActionCreator = (newMessageBody: string):AddMessageActionType => ({type: ADD_MESSAGE, newMessageBody});

export default dialogsReducer