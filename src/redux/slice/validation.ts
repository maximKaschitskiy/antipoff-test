import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ValidationErrorsType } from '../../types/types';

  const initialState: ValidationErrorsType = {};

  const validationSlice = createSlice({
    name: 'validation',
    initialState,
    reducers: {
      setValidation(state, action: PayloadAction<ValidationErrorsType>) {
        return action.payload;
      },
    },
  });
  
  const { setValidation } = validationSlice.actions;

  const validationReducer = validationSlice.reducer;

export { setValidation, validationReducer };