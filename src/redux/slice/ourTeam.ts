import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PersonType } from '../../types/types';

  const initialState: PersonType[] = [];

  const teamSlice = createSlice({
    name: 'team',
    initialState,
    reducers: {
      setUsers(state, action: PayloadAction<PersonType[]>) {
        return [...state, ...action.payload];
      },
    },
  });
  
const {
  setUsers,
} = teamSlice.actions;

const teamReducer = teamSlice.reducer;

export {
    setUsers,
    teamReducer
};