import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { Link, Navigate, useParams, Params } from "react-router-dom";
import { RootState } from "../redux/store/store";
import { setLogOut } from "../redux/slice/currentUser";
import LogoutButton from "../components/LogoutButton";

import telephone from "../assets/telephone.svg";
import email from "../assets/email.svg";
import back from "../assets/back.svg";

const Person: React.FC = () => {

  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(setLogOut());
  };

  const { id }: Readonly<Params<string>> = useParams();

  const teamState = useSelector((state: RootState) => state.team);

    if (teamState.length !== 0) {
      if (!isNaN(Number(id)) && Number(id) >= 1 && Number(id) <= teamState.length) {
        return (
          <div className="our-team person">
            <section className="person__head">
              <Link to={"/team"} className="person__logout person__logout_state_left">
                <p className="person__logout-title">Назад</p>
                <img className="person__logout-icon" src={back} />
              </Link>
              <div className="person__head-wrapper">
                <img className="person__head-photo" src={teamState[Number(id)-1] && teamState[Number(id)-1].avatar}></img>
                <div className="person__head-description">
                  <h2 className="person__head-title">{teamState[Number(id)-1] && teamState[Number(id)-1].first_name} {teamState[Number(id)-1] && teamState[Number(id)-1].last_name}</h2>
                  <h3 className="person__head-role">Партнер</h3>
                </div>
              </div>
              <LogoutButton className="person__logout person__logout_state_right" />
            </section>
            <section className="person__description">
              <article className="person__article">
                <p className="person__paragraph">Клиенты видят в нем эксперта по вопросам разработки комплексных решений финансовых продуктов, включая такие аспекты, как организационная структура, процессы, аналитика и ИТ-компоненты. Он помогает клиентам лучше понимать структуру рисков их бизнеса, улучшать процессы за счет применения новейших технологий и увеличивать продажи, используя самые современные аналитические инструменты.</p>
                <p className="person__paragraph">В работе с клиентами недостаточно просто решить конкретную проблему или помочь справиться с трудностями. Не менее важно уделять внимание обмену знаниями: "Один из самых позитивных моментов — это осознание того, что ты помог клиенту перейти на совершенно новый уровень компетентности, уверенность в том, что после окончания проекта у клиента есть все необходимое, чтобы дальше развиваться самостоятельно".</p>
                <p className="person__paragraph">Помимо разнообразных проектов для клиентов финансового сектора, Сорин ведет активную предпринимательскую деятельность. Он является совладельцем сети клиник эстетической медицины в Швейцарии, предлагающей инновационный подход к красоте, а также инвестором других бизнес-проектов.</p>
              </article>
              <address className="person__contacts">
                <a className="person__contacts-item" href="tel:+7 (954) 333-44-55">
                  <img className="person__contacts-icon" src={telephone}></img>
                  <span className="person__contacts-sign">+7 (954) 333-44-55</span>
                </a>
                <a className="person__contacts-item" href={`mailto:${teamState[Number(id)-1] && teamState[Number(id)-1].email}`}>
                  <img className="person__contacts-icon" src={email}></img>
                  <span className="person__contacts-sign">{teamState[Number(id)-1] && teamState[Number(id)-1].email}</span>
                </a>
              </address>
            </section>
          </div>
        );
      } else {
        return (<Navigate to={'/team'}/>);
      }
    } else {
      return null;
    }
};


export default Person;