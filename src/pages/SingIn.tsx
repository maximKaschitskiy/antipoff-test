import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { RootState } from "../redux/store/store";
import {getStorage, setToStorage} from "../utils/storage";
import { signInSchema } from "../utils/validateShema";
import { YupValidationType, ValidationErrorsType, ShowErrorsType, LoggedUserType } from "../types/types";

import eyeEmpty from "../assets/eye-empty.svg";
import eyeOff from "../assets/eye-off.svg";

import { setUserForm, resetUserForm } from "../redux/slice/userForm";
import { setValidation } from "../redux/slice/validation";
import { setShowErrors } from "../redux/slice/showErrors";
import { setShowPass } from "../redux/slice/showPass";
import { setUser } from "../redux/slice/currentUser";

const SignIn: React.FC = () => {
  
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const signUpState = useSelector((state: RootState) => state.userForm);
  const validityState = useSelector((state: RootState) => state.validity);
  const showErrorState = useSelector((state: RootState) => state.errors);
  const showPassord = useSelector((state: RootState) => state.show);

  const handleFormChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setUserForm({ [event.target.name]: event.target.value }));
  };
  const handleShowErrors = (state: ShowErrorsType) => {
    dispatch(setShowErrors(state));
  };
  const handleValidityFields = (validityObj: ValidationErrorsType) => {
    dispatch(setValidation(validityObj));
  };
  const handleShowPass = (field: string) => {
    dispatch(setShowPass({[field]: !showPassord[field]}));
  };
  const handleSetUser = (user: LoggedUserType) => {
    dispatch(setUser(user));
  };
  const handleResetValues = () => {
    dispatch(resetUserForm());
  };

  const handleSubmit = () => {
    signInSchema
      .validate(signUpState, { abortEarly: false })
      .then(() => {
        handleShowErrors(false);
        const existingUsers = getStorage(localStorage, "users");
        if (existingUsers) {
          const existingUser = existingUsers.find((user: any) => user.email === signUpState.email);
          if (existingUser) {
            if (
                 JSON.stringify({
                  email: existingUser.email,
                  password: existingUser.password,
                }) === 
                  JSON.stringify({
                    email: signUpState.email,
                    password: signUpState.password,
                })
            ) {
              handleSetUser({
                email: signUpState.email
              });
              setToStorage(localStorage, "currentUser", {email: signUpState.email});
              handleResetValues();
              navigate("/");
            }
          }
        }
      })
      .catch((err) => {
        if (err.inner) {
          const allErrs: ValidationErrorsType = {};
          err.inner.forEach((elem: YupValidationType)=> {
            if (allErrs.hasOwnProperty(`${elem.path}`)) {
              allErrs[elem.path].message.push(elem.message);
            } else {
              allErrs[elem.path] = {
                validity: false,
                message: [elem.message],
              };
            }
          });
          handleValidityFields(allErrs);
          handleShowErrors(true);
        } else {
          console.log({err});
        }
      });
  };

  return (
    <section className="sign-up">
      <form className="sign-up__form sign-up__form_state_registration"
        onSubmit={
          (event) => {
            event.preventDefault();
            handleSubmit();
          }
        }
        name="sign-up__form_state_registration" noValidate
      >
        <nav className="sign-up__nav">
          <h2 className="sign-up__form-title">Авторизация</h2>
          <Link className="sign-up__nav-link" to={'/sign-up'}><h2 className="sign-up__form-title">Регистрация</h2></Link>
        </nav>
        <fieldset className="sign-up__form-fieldset sign-up__form-fieldset_state_registration">
          <label className="sign-up__form-label" htmlFor="email-register-field">Электронная почта</label>
          <div className="sign-up__form-input-wrapper">
            <input value={signUpState.email} type="text" placeholder="example@mail.ru"
              className={`sign-up__form-input ${showErrorState && validityState.email
                ? "sign-up__form-input_error_active"
                : ""
                }`} name="email" id="email-register-field"
              onChange={(event) => { handleFormChange(event) }} autoComplete="on"></input>
          </div>
          <span
            className={`sign-up__form-error-text ${showErrorState && validityState.email
              ? "sign-up__form-error-text_visible_active"
              : ""
              }`}
          >
            {validityState.email && validityState.email?.message[0]}
          </span>
          <label className="sign-up__form-label" htmlFor="password-register-field">Пароль</label>
          <div className="sign-up__form-input-wrapper">
            <input
              value={signUpState.password}
              type={showPassord.password ? "text" : "password"}
              placeholder="******"
              className={`sign-up__form-input ${showErrorState && validityState.password
                ? "sign-up__form-input_error_active"
                : ""
                }`}
              name="password" id="password-register-field"
              onChange={(event) => { handleFormChange(event) }}></input>
            <button className="sign-up__form-input-show-button" onClick={(event) => {
              event.preventDefault();
              handleShowPass("password")
            }}>
              <img className="sign-up__form-input-show-icon" src={showPassord.password ? eyeOff : eyeEmpty} />
            </button>
          </div>
          <span
            className={`sign-up__form-error-text ${showErrorState && validityState.password
              ? "sign-up__form-error-text_visible_active"
              : ""
              }`}
          >
            {validityState.password && validityState.password?.message[0]}
          </span>
          <input type="submit" className="sign-up__form-submit-button sign-up__form-submit-button_form_registration" disabled={false} value="Sign up"></input>
        </fieldset>
      </form>
    </section>
  );
};

export default SignIn;