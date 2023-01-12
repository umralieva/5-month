import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {preloaderOn, preloaderOff} from "./preloaderSlice";
import {setError} from "./errorSlice";


export const getPosts = createAsyncThunk(
    'getPosts',
    async function (info, {dispatch, rejectWithValue}) {
        dispatch(preloaderOn())
        try {
            // console.log(info)
            const response = await fetch('https://jsonplaceholder.typicode.com/posts')
            // console.log(response)
            if (response.status === 200) {
                const posts = await response.json()
                // console.log(posts)
                dispatch(postsData(posts))
            } else if (response.status === 404) {
                throw 'url не найден'
            }
        } catch (e) {
            dispatch(setError(e))
        } finally {
            dispatch(preloaderOff())
        }
    }
)

export const getPost = createAsyncThunk(
    'getPost',
    async function (info, {dispatch, rejectWithValue}) {
        dispatch(preloaderOn())
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${info}`)
            if (response.status === 200) {
                const post = await response.json()
                // console.log(post)
                dispatch(postData(post))
            } else if (response.status === 404) {
                throw 'url не найден'
            }
        } catch (e) {
            dispatch(setError(e))
        } finally {
            dispatch(preloaderOff())
        }
    }
)


export const postPosts = createAsyncThunk(
    'postPosts',
    async function (info, {dispatch, rejectWithValue}) {
        try {
            const options = {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(info)
            }
            const response = await fetch('https://jsonplaceholder.typicode.com/posts', options)
            if (response.status >= 200 && response.status <= 204) {
            } else if (response.status === 404) {
                throw 'url не найден'
            }
        } catch (e) {
            dispatch(setError(e))
        } finally {
            dispatch(preloaderOff())
        }

    }
)

const postsSlice = createSlice({
    name: 'postsSlice',
    initialState: {
        posts: [],
        post: {},
        preloader: false,
        error: ''
    },
    reducers: {
        postsData: (state, action) => {
            state.posts = action.payload
            state.error = ''
        },
        deleteData: (state, action) => {
            state.posts = []
            state.post={}
        },
        postData: (state, action) => {
            state.post = action.payload
        },
    }
})

export const {postsData, deleteData, postData} = postsSlice.actions

export default postsSlice.reducer
