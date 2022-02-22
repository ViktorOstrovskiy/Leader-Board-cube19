import * as React from "react";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { useSelector } from "react-redux";

// components
import { Button } from "../../shared";
import ModalEdit from "../Modals/ModalEdit";
// Img
import endIcon from "../../assets/img/edit2.png";
import startIcon from "../../assets/img/delete.png";
// functions
import { deleteUser } from "../../store/form-service/actions";
// styles
import style from "../LeadersFormItem/LeadersFormItem.module.scss";
import cx from "classnames";
import { ILeadersReducer } from "../../store/form-service/types";
import { FC } from "react";

type LeadersItemProps = {
  leaderData: {
    id: string;
    name: string;
    score: number;
  };
  index: number;
};

const LeadersFormItem: FC<LeadersItemProps> = ({ leaderData, index }) => {
  const { leaders, currentDay, isFetching }: ILeadersReducer = useSelector(
    (state: any) => state.userValues
  );

  const [open, setOpen] = useState(false);

  const rank = index + 1;

  const rankLeaders = (): string => {
    switch (rank) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  };
  const listStyles = {
    green: style.leadersItem__green,
    yellow: style.leadersItem__yellow,
    red: style.leadersItem__red,
  };

  const changeLeaderRank = () => {
    if (currentDay === 0) {
      return "no change";
    } else {
      const prevIndex = leaders[currentDay - 1].findIndex(
        (el) => el.name === leaderData.name
      );

      const difference = () => {
        const dif = prevIndex - index;
        if (prevIndex === -1 || dif === 0) {
          return "no change";
        } else {
          return dif;
        }
      };
      return difference();
    }
  };

  const dispatch = useDispatch();

  const handleClose = (): void => {
    setOpen(false);
  };
  console.log(changeLeaderRank());
  return (
    <div className={style.formItem}>
      <div className={style.formItem__index}>
        {rank}
        {rankLeaders()}
      </div>
      <div className={style.formItem__img}>
        <img
          className={style.formItem__leadersImg}
          src="https://klike.net/uploads/posts/2020-04/1587719791_1.jpg"
          alt="icon"
        />
      </div>

      <div className={style.formItem__name}>{leaderData.name}</div>
      <div className={style.formItem__score}>{leaderData.score}</div>
      <div
        className={cx({
          [listStyles.yellow]: changeLeaderRank() === "no change",
          [listStyles.green]: changeLeaderRank() > 0,
          [listStyles.red]: changeLeaderRank() < 0,
        })}
      >
        {changeLeaderRank()}
      </div>
      <div>
        <Button
          clickHandler={() => dispatch(deleteUser(leaderData.id))}
          startIcon={startIcon}
          img={true}
        ></Button>

        <Button
          clickHandler={() => setOpen(true)}
          startIcon={endIcon}
          img={true}
        ></Button>
      </div>

      {open && (
        <ModalEdit
          open={open}
          handleClose={handleClose}
          leaderData={leaderData}
        />
      )}
    </div>
  );
};

export default LeadersFormItem;
