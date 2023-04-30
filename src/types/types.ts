import React = require("react");
import * as Yup from "yup";

type UserType = {
    name: string;
    email: string;
    password: string;
    confirm: string;
}

type LoggedUserType = {
  [field: string]: string;
}

type PersonType = {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    avatar: string;
}

type TeamType = {
    data: PersonType[];
    page: number;
    per_page: number;
    total: number;
    total_pages: number;
    support: {
        url: string;
        text: string;
    };
}

type LikesType = {
    [id: PersonType['id']]: boolean;
}

type RouteType = {
    children: React.ReactElement,
}

type InputType = {
    [name: string]: string;
}

type YupValidationType = {
    value: any;
    path: string;
    type: string;
    errors: string[];
    params: {
      value: any;
      originalValue: any;
      path: string;
      spec: {
        strip: boolean;
        strict: boolean;
        abortEarly: boolean;
        recursive: boolean;
        nullable: boolean;
        optional: boolean;
        coerce: boolean;
      };
    };
    inner: YupValidationType[];
    name: string;
    message: string;
  }

type ValidationErrorsType = {
    [field: string]: {
      validity: boolean;
      message: string[];
    }
}

type ShowErrorsType = boolean;

type ShowPassType = {
  [field: string]: boolean;
}

type PageType = {
  [field: string]: number;
}

type PropsType = {
  className: string;
}

export { UserType, PersonType, TeamType, LikesType, RouteType, InputType, YupValidationType, ValidationErrorsType, ShowErrorsType, ShowPassType, LoggedUserType, PageType, PropsType }