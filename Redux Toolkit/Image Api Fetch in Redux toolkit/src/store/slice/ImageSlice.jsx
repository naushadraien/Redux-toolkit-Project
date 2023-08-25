import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchImage = createAsyncThunk('fetchImage', async()=>{
    const response = await axios.get('https://picsum.photos/v2/list?page=2&limit=12');
    return response;
})

const imageSlice = createSlice({
    name: 'image',
    initialState: {
        isLoading: false,
        data: [],
        isError: false,
    },
    extraReducers(builder){
        builder.addCase(fetchImage.pending, (state,action)=>{
            state.isLoading = true;
        });
        builder.addCase(fetchImage.fulfilled, (state,action)=>{
            state.isLoading = false;
            state.data = action.payload.data;
            console.log(action);
        });
        builder.addCase(fetchImage.rejected, (state,action)=>{
            state.isError = true;
            console.log('Error',action.payload);
        });
    }
});

export default imageSlice.reducer;