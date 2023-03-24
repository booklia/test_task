import { configureStore } from '@reduxjs/toolkit'
import searchParams from './searchParamsSlice';
// ...

export const store = configureStore({
  reducer: {
    searchParams,
    // posts: postsReducer,
    // comments: commentsReducer,
    // users: usersReducer
  }
})

export default store;

// // Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// // Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch