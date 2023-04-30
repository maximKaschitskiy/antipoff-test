import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserType, InputType } from '../../types/types';

  const initialState: UserType = {
    name: '',
    email: '',
    password: '',
    confirm: '',
  };

  const userFormSlice = createSlice({
    name: 'userForm',
    initialState,
    reducers: {
      setUserForm(state, action: PayloadAction<InputType>) {
        return {...state, ...action.payload};
      },
      resetUserForm() {
        return initialState;
      },
    },
  });
  
  const { setUserForm, resetUserForm } = userFormSlice.actions;

  const userReducer = userFormSlice.reducer;

export { setUserForm, resetUserForm, userReducer };