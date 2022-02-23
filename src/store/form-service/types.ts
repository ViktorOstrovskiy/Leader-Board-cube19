import { Leader } from "../../core/types";
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

export interface ILeadersReducer {
  userValues?: any;
  currentDay: number;
  leaders: Array<Array<Leader>>;
  isFetching: boolean;
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
interface isFetching {
  type: typeof TRUE_IS_FETCHING;
  payload: boolean;
}
interface isFetching1 {
  type: typeof FALSE_IS_FETCHING;
  payload: boolean;
}

export type ActionTypes =
  | IEditLeader
  | INexDay
  | IPrevDay
  | INewDay
  | ISetleadersList
  | IDeleteLeader
  | isFetching
  | isFetching1
  | IAddLeader;
