import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "../slice/todoSlice";
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
import {combineReducers} from "redux"
import userSlice from "../slice/userSlice";


const persistConfig = {
    key: 'root',
    storage,
  }

  const reducer = combineReducers({
    posts: todoSlice,
    users: userSlice,
  });
  
  const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
})

export const persistor = persistStore(store);

