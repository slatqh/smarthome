import {configureStore} from '@reduxjs/toolkit';
import switchReducer from './slice/switchSlice';
export const store = configureStore({
  reducer: {
    switch: switchReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
