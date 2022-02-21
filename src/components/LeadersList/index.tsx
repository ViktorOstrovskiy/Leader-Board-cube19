import { useState, useEffect } from "react";
import * as React from "react";
import { useDispatch } from "react-redux";
// components
import { Button } from "../../shared";
import LeadersFormItem from "../LeadersFormItem";
import ModalAdd from "../Modals/ModalAdd";
// functions
import {
  newCurrentDay,
  prevDay,
  nextCurrentDay,
} from "../../store/form-service/actions";
import { loadLeaders } from "../../store/form-service/actions";
// styles
import style from "../LeadersList/LeadersList.module.scss";
import { ILeadersReducer } from "../../store/form-service/types";

const LeadersList = ({ leaders, currentDay }: ILeadersReducer) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadLeaders());
  }, []);
  const [open, setOpen] = useState(false);

  const handleClose = () => setOpen(false);
  const nextDay = () => {
    if (currentDay !== leaders.length - 1) {
      dispatch(nextCurrentDay());
    }
  };

  const newDay = () => {
    if (currentDay !== leaders.length - 1) {
      dispatch(newCurrentDay());
    } else {
      dispatch(loadLeaders());
      return dispatch(newCurrentDay());
    }
  };

  const prevDays = () => {
    dispatch(prevDay());
  };

  return (
    <div>
      <div className={style.wrapper}>
        <div>
          <h3>Leaders table for this period</h3>
        </div>
        <div className={style.button}>
          <Button
            title="<<"
            clickHandler={prevDays}
            disabled={currentDay === 0}
            change={true}
          />
          <Button
            title=">>"
            clickHandler={nextDay}
            disabled={currentDay === leaders.length - 1}
            change={true}
          />
          <Button
            title="New day"
            clickHandler={newDay}
            disabled={currentDay !== leaders.length - 1}
          />
          <Button
            title="+Add Score"
            violet={true}
            clickHandler={() => setOpen(true)}
          />
        </div>
      </div>

      <ul className={style.list}>
        {(leaders[currentDay] || []).map((item, index) => (
          <LeadersFormItem key={item.id} leaderData={item} index={index} />
        ))}
      </ul>

      <ModalAdd handleClose={handleClose} open={open} />
    </div>
  );
};

export default LeadersList;
