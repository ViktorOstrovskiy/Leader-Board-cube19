import { nanoid } from "nanoid";
import { Dispatch } from "react";
import api from "../../axios/instance";
import { Leader, LeaderResponse } from "../../core/types";
import {
  ADD_LFORM,
  DELETE_LFORM,
  EDIT_LFORM,
  NEXT_CURRENT_DAY,
  PREV_CURRENT_DAY,
  SET_LEADERS_LIST,
  NEW_CURRENT_DAY,
  TRUE_IS_FETCHING,
  FALSE_IS_FETCHING,
} from "../action-types";

export const loadLeaders =
  () =>
  async (dispatch: Dispatch): Promise<void> => {
    try {
      dispatch(toggleIsFetching());
      const { data } = await api.get("starting-state");
      const modifyLeaderList: Leader = data.map((obj: LeaderResponse) => {
        if (!obj.hasOwnProperty("score")) {
          obj.score = 0;
        }
        return { ...obj, id: nanoid() };
      });
      dispatch(toggleIsFetching1());

      dispatch(setLeadersList(modifyLeaderList));
    } catch (err) {}
  };

export const message = (leader: { name: string; score: number }) => {
  return async (dispatch: Dispatch): Promise<void> => {
    try {
      const { data } = await api.post("process-user", {
        username: leader.name,
      });

      const leaderToAdd: Leader | any = {
        name: Object.values(data)[0],
        score: leader.score,
        id: nanoid(),
        rank: 0,
      };
      dispatch(addLeader(leaderToAdd));
      console.log("data", Object.values(data)[0]);
      console.log("name", leader.name);
    } catch (err: any) {
      console.log("eroro", { err });

      if (err.response.status === 500) {
        dispatch(message(leader));
      }
      return Promise.reject(err);
    }
  };
};

export const addLeader = (leaderToAdd: Leader) => {
  console.log("DATA", leaderToAdd);
  return {
    type: ADD_LFORM,
    payload: leaderToAdd,
  };
};

export const deleteUser = (id: string) => {
  return {
    type: DELETE_LFORM,
    payload: id,
  };
};

export const editLeader = (userValues: Leader) => {
  return {
    type: EDIT_LFORM,
    payload: userValues,
  };
};

export const setLeadersList = (data: Leader) => {
  return {
    type: SET_LEADERS_LIST,
    payload: data,
  };
};

export const newCurrentDay = () => {
  return {
    type: NEW_CURRENT_DAY,
  };
};

export const prevDay = () => {
  return {
    type: PREV_CURRENT_DAY,
  };
};

export const nextCurrentDay = () => {
  return {
    type: NEXT_CURRENT_DAY,
  };
};

export const toggleIsFetching = () => {
  return {
    type: TRUE_IS_FETCHING,
  };
};
export const toggleIsFetching1 = () => {
  return {
    type: FALSE_IS_FETCHING,
  };
};
