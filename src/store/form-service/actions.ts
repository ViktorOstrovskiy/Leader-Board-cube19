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
} from "../action-types";

export const loadLeaders =
  () =>
  async (dispatch: Dispatch): Promise<void> => {
    try {
      const { data } = await api.get("starting-state");
      const modifyLeaderList: Leader = data.map((obj: LeaderResponse) => {
        if (!obj.hasOwnProperty("score")) {
          obj.score = 0;
        }
        return { ...obj, id: nanoid() };
      });
      dispatch(setLeadersList(modifyLeaderList));
    } catch (err) {}
  };

export const message = (name: Leader) => {
  return async () => {
    try {
      const data = await api.post("process-user", {
        username: name,
      });

      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };
};

export const addLeader = (data: Leader[]) => {
  return {
    type: ADD_LFORM,
    payload: data,
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
