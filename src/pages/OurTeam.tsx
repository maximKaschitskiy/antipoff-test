import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from 'react-router-dom';
import uniqid from "uniqid";
import getUrl from '../api/Api';
import LogoutButton from "../components/LogoutButton";
import { PersonType, PageType } from '../types/types';
import { setToStorage, getStorage } from "../utils/storage";

import { setLike, setLikes } from "../redux/slice/likes";
import { setUsers } from "../redux/slice/ourTeam";
import { setPage } from '../redux/slice/pageData';
import { RootState } from "../redux/store/store";

import like from "../assets/like.svg";
import likeOff from "../assets/like-off.svg";
import arrow from "../assets/arrow-bottom.svg";

const OurTeam: React.FC = () => {

  const dispatch = useDispatch();

  const teamState = useSelector((state: RootState) => state.team);
  const likesState = useSelector((state: RootState) => state.likes);
  const page = useSelector((state: RootState) => state.page);

  const handleSetUsers = (persons: PersonType[]) => {
    dispatch(setUsers(persons));
  };

  const hadleSetPage = (persons: PageType) => {
    dispatch(setPage(persons));
  };

  const handleLike = (id: number) => {
    if (likesState[id] === undefined) {
      dispatch(setLike({ [id]: true }));
    }
    if (likesState[id] !== undefined) {
      dispatch(setLike({ [id]: !likesState[id] }));
    }
  };

  const fetchData = (url: string) => {
    getUrl(url)
      .then(data => {
        const { page, per_page, total, total_pages } = data;
        hadleSetPage({ page, per_page, total, total_pages });
        handleSetUsers(data.data);
      });
  }

  const nextPage = () => {
    const baseUrl = 'https://reqres.in/api/users?page=';
    if (JSON.stringify(page) !== '{}') {
      if (page['page'] !== page['total_pages']) {
        return `${baseUrl}${Number(page['page']) + 1}`;
      }
    }
  }

  React.useEffect(() => {
    if (JSON.stringify(likesState) !== '{}') {
      setToStorage(localStorage, "likes", likesState);
    }
  },[likesState]);

  React.useEffect(() => {
    if (JSON.stringify(likesState) !== '{}') {
      setToStorage(localStorage, "likes", likesState);
    }
  },[likesState]);

  React.useEffect(() => {
    const likes = getStorage(localStorage, "likes");
    if (likes) {
      if (JSON.stringify(likes) !== '{}') {
        dispatch(setLikes(likes));
      }
    }
  }, []);

  React.useMemo(() => {
    const apiUrl = 'https://reqres.in/api/users?page=1';
    if (teamState.length === 0) {
      fetchData(apiUrl);
    }
  }, []);

  return (
    <div className="our-team">
      <section className="our-team__head">
        <menu className="our-team__navigation">
          <LogoutButton className="our-team__logout"/>
        </menu>
        <div className="our-team__article-wrapper">
          <h1 className="our-team__title">Наша команда</h1>
          <article className="our-team__title-article">Это опытные специалисты, хорошо разбирающиеся во всех задачах, которые ложатся на их плечи, и умеющие находить выход из любых, даже самых сложных ситуаций.</article>
        </div>
      </section>
      <section className="our-team__cards">
        <ul className="our-team__cards-wrapper">
          {
            teamState.map((item: PersonType) => {
              return (
                <li className="our-team__card" key={uniqid()}>
                  <Link className="our-team__card-link" to={`/team/${Number(item.id)}`}>
                    <img className="our-team__card-person-pic" src={item.avatar}></img>
                    <p className="our-team__card-person-name">{item.first_name} {item.last_name}</p>
                    <button className="our-team__card-person-like"
                      onClick={(event) => {
                        event.preventDefault();
                        handleLike(item.id);
                      }}
                    >
                      <img className="our-team__card-person-like-img" src={likesState[item.id] ? like : likeOff}></img>
                    </button>
                  </Link>
                </li>
              )
            })
          }
        </ul>
        {
            <button className="our-team__load-more"
              onClick={() => {
                const apiUrl = nextPage();
                if (apiUrl) {
                  fetchData(apiUrl);
                }
              }}
              disabled={
                page.page === page.total_pages
              }
            >
              <p className="our-team__load-more-title">Показать еще</p>
              <img className="our-team__load-more-icon" src={arrow} />
            </button>
        }
      </section>
    </div>
  );
};


export default OurTeam;
