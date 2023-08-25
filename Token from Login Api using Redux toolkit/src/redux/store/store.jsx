import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "../slice/LoginSlice";
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';

const persistConfig = {
    key: 'root',
    storage,
  }

  const persistedReducer = persistReducer(persistConfig, loginSlice)

export const store = configureStore({
    reducer:{
        login: persistedReducer,
        middleware: [thunk],
    }
})

export const persistor = persistStore(store);