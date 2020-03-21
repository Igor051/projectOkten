import profileReducer, {addPostActionCreator, deletePost} from "./profile-reducer";
import React from "react";

let state = {
    posts: [
        {id: 1, message: 'Hello friend', likesCount: '8'},
        {id: 2, message: 'Hi, bro. How are you ?', likesCount: '22'}
    ]
};

it('length of posts should be incremented ', () => {
    //test data
    let action = addPostActionCreator('hello I am Igor')

    //action
    let newState = profileReducer(state, action);

    //expectation
    expect(newState.posts.length).toBe(3)
});

it('message of new post should be correct ', () => {
    //test data
    let action = addPostActionCreator('hello I am Igor')

    //action
    let newState = profileReducer(state, action);

    //expectation
    expect(newState.posts[2].message).toBe('hello I am Igor')
});

it('after deleting length of message should be decrement ', () => {
    //test data
    let action = deletePost(1);

    //action
    let newState = profileReducer(state, action);

    //expectation
    expect(newState.posts.length).toBe(1)
});

it(`after deleting length of message shouldn't be decrement if id is incorrect `, () => {
    //test data
    let action = deletePost(100);

    //action
    let newState = profileReducer(state, action);

    //expectation
    expect(newState.posts.length).toBe(2)
});
