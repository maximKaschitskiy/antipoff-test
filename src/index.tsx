import React from 'react';
import { getStorage } from './utils/storage';
import { Routes, Route} from "react-router-dom";
import { setUser } from "./redux/slice/currentUser";
import { useDispatch } from "react-redux";
import { LoggedUserType } from './types/types';
import './index.css';

import PublicRoute from "./components/PublicRoute";
import ProtectedRoute from "./components/ProtectedRoute";

import SignUp from './pages/SingUp';
import OurTeam from './pages/OurTeam';
import Person from './pages/Preson';
import SignIn from './pages/SingIn';

const App: React.FC = () => {

  React.useEffect(() => {
    document.title = "Antipoff";
  }, []);

  const dispatch = useDispatch();

  const handleSetUser = (user: LoggedUserType) => {
    dispatch(setUser(user));
  };

  React.useEffect(() => {
    const user = getStorage(localStorage, "currentUser");
    if (user) {
      handleSetUser(user);
    }
  }, []);

  return (
    <main className="main">
      <Routes>
        <Route path="*" element={
          <PublicRoute>
            <SignIn />
          </PublicRoute>
        } />
        <Route
          path="/sign-in"
          element={
            <PublicRoute>
              <SignIn />
            </PublicRoute>
          }
        />
        <Route
          path="/sign-up"
          element={
            <PublicRoute>
              <SignUp />
            </PublicRoute>
          }
        />
        <Route
          path="/team"
          element={
            <ProtectedRoute>
              <OurTeam />
            </ProtectedRoute>
          }
        />
        <Route
          path="/team/:id"
          element={
            <ProtectedRoute>
              <Person />
            </ProtectedRoute>
          }
        />
      </Routes>
    </main>
  );
};


export default App;
