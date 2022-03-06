import { configureStore, ThunkAction, Action, combineReducers } from '@reduxjs/toolkit';
import { AppState } from './AppState';
import { communityReducer } from './reducers/CommunityReducer';
import { userReducer } from './reducers/UserReducer';

export const store = configureStore({
  reducer: combineReducers<AppState>({
    user: userReducer,
    community: communityReducer,
  }),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;