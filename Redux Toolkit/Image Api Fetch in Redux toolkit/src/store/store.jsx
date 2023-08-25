import { configureStore } from "@reduxjs/toolkit";
import imageSlice from "./slice/ImageSlice";
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';

const persistConfig = {
    key: 'root',
    storage,
  };

  const persistedReducer = persistReducer(persistConfig, imageSlice)

export const store = configureStore({
    reducer:{
        image: persistedReducer,
        middleware: [thunk],
    }
});

export const persistor = persistStore(store);