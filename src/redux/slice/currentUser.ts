import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LoggedUserType } from '../../types/types';

  const initialState: LoggedUserType = {};

  const userSlice = createSlice({
    name: 'currentUser',
    initialState,
    reducers: {
      setUser(state, action: PayloadAction<LoggedUserType>) {
        return action.payload;
      },
      setLogOut() {
        return initialState;
      },
    },
  });
  
const {setUser, setLogOut} = userSlice.actions;

const currentUserReducer = userSlice.reducer;

export {
    setUser,
    setLogOut,
    currentUserReducer
};