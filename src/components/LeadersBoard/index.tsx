import * as React from "react";
import { Leader } from "../../core/types";
import { useSelector } from "react-redux";
// components
import LeadersList from "../LeadersList";
// styles
import style from "../LeadersBoard/LeadersBoard.module.scss";
import { ILeadersReducer } from "../../store/form-service/types";

const LeadersBoard = () => {
  const { leaders, currentDay, isFetching }: ILeadersReducer = useSelector(
    (state: any) => state.userValues
  );

  const filtered = leaders
    .flat()
    .sort((a, b) => b.score - a.score)
    .reduce((unique: Leader[], o) => {
      if (!unique.some((obj: Leader) => obj.name === o.name)) {
        unique.push(o);
      }
      return unique;
    }, [])
    .slice(0, 4);

  const topLeaders = filtered;

  return (
    <main className={style.scoreboard__main}>
      <div>
        <h1>Leaders Board</h1>
      </div>
      <div className={style.scoreboar__header}>
        <div className={style.scoreboar__header__text}>
          <h2>All time Highest Scorers</h2>
          <ul className={style.hightScore}>
            {topLeaders.map((item: Leader) => (
              <li className={style.hightScore__item} key={item.id}>
                <div className={style.topLeadersImg}>
                  <img
                    className={style.hightScore__item__img}
                    src="https://klike.net/uploads/posts/2020-04/1587719791_1.jpg"
                    alt="icon"
                  />
                  <div className={style.topLeadersImg__score}>{item.score}</div>
                </div>
                <div className={style.topLeadersName}>{item.name}</div>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <img
            className={style.scoreboar__header__img}
            src="https://raw.githubusercontent.com/cube19/ui-coding-test/f1a298ffad649eb17ab2399c3ed733e175b5e123/business-people.svg"
            alt="img"
            width="100%"
            height="150"
          />
        </div>
      </div>

      <section className={style.scoreboard__section}>
        <LeadersList
          leaders={leaders}
          currentDay={currentDay}
          isFetching={isFetching}
        />
      </section>
    </main>
  );
};

export default LeadersBoard;
