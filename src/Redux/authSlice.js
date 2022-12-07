import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const login = createAsyncThunk('login', async (user, thunkApi) => {
    try {
        const response = await axios.post('http://localhost:5000/v1/auth/login', user)
        if (response) {
            localStorage.setItem('user', JSON.stringify(response.data))
        }
        return response.data
    } catch (error) {
        const message = error.message
        return thunkApi.rejectWithValue(message)
    }

})

export const register = createAsyncThunk('register', async (user, thunkApi) => {
    try {
        const response = await axios.post('http://localhost:5000/v1/auth/register', user)
        if (response.data) {
            localStorage.setItem('user', JSON.stringify(response.data))
        }
        return response.data
    }
    catch (error) {
        const message = error
        return thunkApi.rejectWithValue(message)
    }
})


export const authSlice = createSlice({
    name: 'authSlice',
    initialState: {
        userData: null,
        loading: false,
        error: false,
        message: '',
        isLoggedIn: false
    },
    reducers: {
        reset: (state) => {
            state.error = false
            state.loading = false
            state.message = ''
            state.isLoggedIn = false
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(register.pending, (state) => {
                state.loading = true
            })
            .addCase(register.fulfilled, (state, action) => {
                state.loading = false
                state.userData = action.payload
                state.isLoggedIn = true
            })
            .addCase(register.rejected, (state, action) => {
                state.error = true
                state.message = action.payload
                state.userData = null
                state.loading = false
            })
            .addCase(login.pending, (state) => {
                state.loading = true
            })
            .addCase(login.fulfilled, (state, action) => {
                state.loading = false
                state.userData = action.payload
                state.isLoggedIn = true
            })
            .addCase(login.rejected, (state, action) => {
                state.error = true
                state.message = action.payload
                state.userData = null
                state.loading = false
            })
    }
})

export const { reset } = authSlice.actions;
export default authSlice.reducer


