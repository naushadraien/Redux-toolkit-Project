import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


export const loginDetail = createAsyncThunk('loginDetail',async()=>{
    try {
        const response = await fetch('https://dummyjson.com/auth/login', {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json',
                Authorization: localStorage.getItem('token'),
            },
            body: JSON.stringify({
                username: 'kminchelle',
                password: '0lelplR',
            }),
        });
        console.log(response);
        return response.json();
    } catch (error) {
        console.log(error);
    }
})

const loginSlice = createSlice({
    name: 'login',
    initialState:{
        user: '',
        token: '',
        isLoading: false,
    },
    reducers:{
        addtoken: (state,action)=>{
            state.token = localStorage.getItem('token');
        },
        addUser: (state,action)=>{
            state.user = localStorage.getItem('user');
        },
        removeUser: (state,action)=>{
            state.token = "";
            state.user = "";
            localStorage.removeItem("token");
            localStorage.removeItem("user");
        },
    },
    extraReducers(builder){
        builder.addCase(loginDetail.pending,(state,action)=>{
            state.isLoading = true;
        });
        builder.addCase(loginDetail.fulfilled,(state,action)=>{
            state.isLoading = false;
            state.token = action.payload.token;
            state.user = action.payload;
            localStorage.setItem('token',JSON.stringify(state.token));
            localStorage.setItem('user',JSON.stringify(state.user));
            console.log(state.user,state.token);
        });
        builder.addCase(loginDetail.rejected,(state,action)=>{
            state.isLoading = true;
            console.log('Error', action);

        });
    }
})

export default loginSlice.reducer;
export const {addtoken, addUser, removeUser} = loginSlice.actions;