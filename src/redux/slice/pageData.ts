import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PageType } from '../../types/types';

  const initialState: PageType = {};

  const pageSlice = createSlice({
    name: 'pageState',
    initialState,
    reducers: {
      setPage(state, action: PayloadAction<PageType>) {
        return action.payload;
      },
    },
  });
  
const {setPage} = pageSlice.actions;

const pageReducer = pageSlice.reducer;

export {
    setPage,
    pageReducer
};