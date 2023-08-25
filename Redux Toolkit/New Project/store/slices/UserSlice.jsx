import { createSlice } from "@reduxjs/toolkit";
import { clearAllUsers } from "../../actions/ClearAllUser";

const userSlice = createSlice({
    name: 'user',
    initialState: [],

    reducers:{ //if action is supposed to be handled by one reducer, use reducers
        addUser(state,action){ //here state is only for this component
            state.push(action.payload); //here payload is the data from the api which is added at the end of data
        },
        removeUser(state,action){
            state.splice(action.payload,1);
        },
        // clearAllUsers(state,action){
        //     return [];
        // },
    },
    extraReducers(builder){ //if action is supposed to be handled by multiple reducer, use extraReducers
        builder.addCase(clearAllUsers, ()=>{
            return [];
        })

    }
})

console.log(userSlice.actions);


export default userSlice.reducer;

export const {addUser, removeUser} = userSlice.actions; //this is the action creators which is exported