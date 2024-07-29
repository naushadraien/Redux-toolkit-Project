import { configureStore } from "@reduxjs/toolkit";
import clientReducer from "./clientSlice";
import { clientApi } from "./clientApiSlice";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

const store = configureStore({
  reducer: {
    client: clientReducer,
    // Add the generated reducer as a specific top-level slice
    [clientApi.reducerPath]: clientApi.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(clientApi.middleware),
});

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
