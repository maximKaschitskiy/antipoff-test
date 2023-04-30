import { configureStore } from "@reduxjs/toolkit";
import {userReducer} from "../slice/userForm";
import {teamReducer} from "../slice/ourTeam";
import {likesReducer} from '../slice/likes';
import {validationReducer} from '../slice/validation';
import {showErrorosReducer} from "../slice/showErrors";
import {showPassReducer} from "../slice/showPass";
import {currentUserReducer} from "../slice/currentUser";
import {pageReducer} from "../slice/pageData";

const store = configureStore({
  reducer: {
    userForm: userReducer,
    team: teamReducer,
    likes: likesReducer,
    validity: validationReducer,
    errors: showErrorosReducer,
    show: showPassReducer,
    user: currentUserReducer,
    page: pageReducer,
  },
});

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch

export {store, RootState, AppDispatch};