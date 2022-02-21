import { Leader } from "../../core/types";
import {
  ADD_LFORM,
  DELETE_LFORM,
  EDIT_LFORM,
  NEXT_CURRENT_DAY,
  PREV_CURRENT_DAY,
  SET_LEADERS_LIST,
  NEW_CURRENT_DAY,
} from "../action-types";

export interface ILeadersReducer {
  currentDay: number;
  leaders: Array<Array<Leader>>;
}

interface IAddLeader {
  type: typeof ADD_LFORM;
  payload: Leader;
}

interface IDeleteLeader {
  type: typeof DELETE_LFORM;
  payload: Leader | string;
}

interface IEditLeader {
  type: typeof EDIT_LFORM;
  payload: Leader;
}

interface ISetleadersList {
  type: typeof SET_LEADERS_LIST;
  payload: Leader[];
}

interface INexDay {
  type: typeof NEXT_CURRENT_DAY;
  payload: Leader;
}

interface INewDay {
  type: typeof NEW_CURRENT_DAY;
  payload: Leader;
}

interface IPrevDay {
  type: typeof PREV_CURRENT_DAY;
  payload: Leader;
}

export type ActionTypes =
  | IEditLeader
  | INexDay
  | IPrevDay
  | INewDay
  | ISetleadersList
  | IDeleteLeader
  | IAddLeader;
