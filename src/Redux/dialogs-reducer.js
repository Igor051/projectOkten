const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT';
const ADD_MESSAGE = 'ADD_MESSAGE';

let initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_TEXT:
            return  {
                ...state,
                newMessageText: action.newText
            };
        case ADD_MESSAGE:
            let newMessage = {
                id: 5, message: state.newMessageText
            };
           return  {
                ...state,
                messages: [...state.messages, newMessage],
                newMessageText: '',
            };
        default:
            return state
    }

};

export const updateNewMessageTextActionCreator = (text) => ({
    type: UPDATE_NEW_MESSAGE_TEXT,
    newText: text
});
export const addMessageActionCreator = () => ({type: ADD_MESSAGE});

export default dialogsReducer