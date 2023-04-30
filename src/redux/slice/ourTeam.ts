import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PersonType } from '../../types/types';

  const initialState: PersonType[] = [];

  const teamSlice = createSlice({
    name: 'team',
    initialState,
    reducers: {
      addUsers(state, action: PayloadAction<PersonType[]>) {
        return [...state, ...action.payload];
      },
      setUsers(state, action: PayloadAction<PersonType[]>) {
        return action.payload;
      },
    },
    
  });
  
const {
  setUsers, addUsers
} = teamSlice.actions;

const teamReducer = teamSlice.reducer;

export {
    setUsers,
    addUsers,
    teamReducer
};