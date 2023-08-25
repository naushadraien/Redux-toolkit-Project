import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

//for creating the posts
export const getAllUsers = createAsyncThunk('getAllUsers', async(data, {rejectWithValue})=>{//this data argument is passed from the dispatch function where this function is called
    const response = await fetch ('https://64475d2650c253374423253d.mockapi.io/crud',{
        method: 'Post',
        headers:{
            'content-type': 'application/json'
        },
        body: JSON.stringify(data),
    })
    try {
        return await response.json();
    } catch (error) {
        return rejectWithValue(error.response);
    }
});

//for reading the posts
export const getAllData = createAsyncThunk('getAllData', async(data,{rejectWithValue})=>{
    const response = await fetch ('https://64475d2650c253374423253d.mockapi.io/crud')
    try {
        // console.log(response);
        return await response.json();
    } catch (error) {
        return rejectWithValue(error.response);
    }
});

//for Deleteing the posts
export const deleteUser = createAsyncThunk('deleteUser', async(id, {rejectWithValue})=>{//this id is passed in from dispatch where this deleteUser is called
    const response = await fetch (`https://64475d2650c253374423253d.mockapi.io/crud/${id}`,{ 
        method: 'Delete'
    })
    try {
        return await response.json();
    } catch (error) {
        return rejectWithValue(error.response);
    }
});
//for updating the posts
export const updateUser = createAsyncThunk('updateUser', async(data, {rejectWithValue})=>{//this data argument is passed from the dispatch function where this function is called
    const response = await fetch (`https://64475d2650c253374423253d.mockapi.io/crud/${data.id}`,{
        method: 'Put',
        headers:{
            'content-type': 'application/json'
        },
        body: JSON.stringify(data),
    })
    try {
        return await response.json();
    } catch (error) {
        return rejectWithValue(error.response);
    }
});


const userSlice = createSlice({
    name: 'user',
    initialState:{
        users: [],
        isLoading: false,
        isErrror: false,
        searchData: [],
    },
    reducers:{
        searchUser:(state, action)=>{
            // console.log(action.payload);
            state.searchData= action.payload;
        },
    },
    extraReducers(builder){
        //for creating posts
        builder.addCase(getAllUsers.pending, (state, action)=>{
            state.isLoading = true;
        });
        builder.addCase(getAllUsers.fulfilled, (state, action)=>{
            state.isLoading = false;
            state.users.push(action.payload);
            console.log(state.users);
        });
        builder.addCase(getAllUsers.rejected, (state, action)=>{
            state.isErrror = action.payload;
            console.log('error', state.isErrror);
        });
        //for reading posts
        builder.addCase(getAllData.pending, (state,action)=>{
            state.isLoading = true;
        });
        builder.addCase(getAllData.fulfilled, (state,action)=>{
            state.isLoading = false;
            state.users = action.payload;
        });
        builder.addCase(getAllData.rejected, (state,action)=>{
            state.isErrror = true;
            console.log('Error',action.payload);
        });
         //for deleting posts
         builder.addCase(deleteUser.pending, (state,action)=>{
            state.isLoading = true;
        });
        builder.addCase(deleteUser.fulfilled, (state,action)=>{
            state.isLoading = false;
            // state.users = action.payload.id
            // console.log('delete user',action.payload.id);
            

            const {id} = action.payload // extracting id from the payload
            if(id){
                state.users = state.users.filter((element)=>element.id !==id); //If the id exists, it uses the filter method to create a new users array that excludes the user with the matching id. The filter method loops through each element of the state.users array and returns a new array containing only those elements for which the callback function returns true. In this case, the callback function checks if the id of the current element is not equal to the id of the user to be removed (action.payload.id).
            }

        });
        builder.addCase(deleteUser.rejected, (state,action)=>{
            state.isErrror = true;
            console.log('Error',action.payload);
        });
        //for updating posts
        builder.addCase(updateUser.pending, (state, action)=>{
            state.isLoading = true;
        });
        builder.addCase(updateUser.fulfilled, (state, action)=>{
            state.isLoading = false;
            state.users = state.users.map((element)=>{
                element.id === action.payload.id ? action.payload : element;
            })
        });
        builder.addCase(updateUser.rejected, (state, action)=>{
            state.isErrror = action.payload;
            console.log('error', state.isErrror);
        });
        
    }
})

export default userSlice.reducer;
export const {searchUser} = userSlice.actions;