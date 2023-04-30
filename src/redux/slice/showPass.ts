import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ShowPassType } from '../../types/types';

  const initialState: ShowPassType = {
    password: false,
    confirm: false,
  };

  const showPassSlice = createSlice({
    name: 'showPass',
    initialState,
    reducers: {
      setShowPass(state, action: PayloadAction<ShowPassType>) {
        return {...state, ...action.payload};
      },
    },
  });
  
  const { setShowPass } = showPassSlice.actions;

  const showPassReducer = showPassSlice.reducer;

export { setShowPass, showPassReducer };