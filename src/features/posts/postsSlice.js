import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {id: 1, title: 'my 1st post on the internet', content: 'A hot story of how i went boom on the internet'},
    {id: 2, title: 'even being a pilot', content: 'Let us get your mind dirty with some amazing stories of me being a pilot'}
]

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        addPost(state, action) {
            state.push(action.payload)
        }
    }
})

export default postsSlice.reducer;

export const {addPost} = postsSlice.actions;