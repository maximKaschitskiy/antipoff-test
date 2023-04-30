import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ShowErrorsType } from '../../types/types';

  const initialState: ShowErrorsType = false;

  const showErrorsSlice = createSlice({
    name: 'validation',
    initialState,
    reducers: {
        setShowErrors(state, action: PayloadAction<ShowErrorsType>) {
        return action.payload;
      },
    },
  });
  
  const { setShowErrors } = showErrorsSlice.actions;

  const showErrorosReducer = showErrorsSlice.reducer;

export { setShowErrors, showErrorosReducer };