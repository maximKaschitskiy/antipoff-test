import React , { FC } from 'react';
import { Link, NavLink, Navigate, useParams, Params } from "react-router-dom";
import { RootState } from "../redux/store/store";
import { useSelector, useDispatch } from "react-redux";
import { PropsType } from "src/types/types";
import { setLogOut } from "../redux/slice/currentUser";
import { getStorage, setToStorage } from "../utils/storage";

import logout from "../assets/ic_round-exit-to-app.svg";
import telephone from "../assets/telephone.svg";
import email from "../assets/email.svg";
import back from "../assets/back.svg";

const LogoutButton: React.FC<PropsType> = ({className}) => {

  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(setLogOut());
    setToStorage(localStorage, "currentUser", {});
  };

        return (
              <button className={className}
                onClick={()=>{
                    handleLogOut();
                }}
              >
                <p className="person__logout-title">Выход</p>
                <img className="person__logout-icon" src={logout} />
              </button>
        );
};


export default LogoutButton;
