import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LikesType } from '../../types/types';

  const initialState: LikesType = {};

  const likesSlice = createSlice({
    name: 'likes',
    initialState,
    reducers: {
      setLike(state, action: PayloadAction<LikesType>) {
        return {...state, ...action.payload};
      },
      setLikes(state, action: PayloadAction<LikesType>) {
        return action.payload;
      },
    },
  });
  
const {setLike, setLikes} = likesSlice.actions;

const likesReducer = likesSlice.reducer;

export {
    setLike,
    setLikes,
    likesReducer
};