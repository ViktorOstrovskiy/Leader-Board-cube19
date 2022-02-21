import { ActionTypes, ILeadersReducer } from "./types";
import {
  ADD_LFORM,
  DELETE_LFORM,
  EDIT_LFORM,
  NEXT_CURRENT_DAY,
  PREV_CURRENT_DAY,
  SET_LEADERS_LIST,
  NEW_CURRENT_DAY,
} from "../action-types";
import { Leader } from "../../core/types";
const initialState: ILeadersReducer = {
  leaders: [],
  currentDay: 0,
};

const reducer = (state = initialState, action: ActionTypes) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_LFORM:
      const leadersAdd = state.leaders;
      leadersAdd[state.currentDay].push(payload as Leader);
      leadersAdd[state.currentDay].sort((a, b) => b.score - a.score);
      return {
        ...state,
        leaders: [...leadersAdd, payload].sort,
      };

    case DELETE_LFORM:
      const leadersDelete = state.leaders;
      const filtered = leadersDelete[state.currentDay].filter(
        (state) => state.id !== (payload as Leader).id
      );
      leadersDelete[state.currentDay] = filtered;

      return {
        ...state,
        leaders: [...leadersDelete],
      };
    case EDIT_LFORM:
      const newLeaders = state.leaders;
      const maping = newLeaders[state.currentDay]
        .map((item) =>
          item.id === (payload as Leader).id ? (payload as Leader) : item
        )
        .sort((a, b) => b.score - a.score);
      newLeaders[state.currentDay] = maping;
      return {
        ...state,
        leaders: [...newLeaders],
      };
    case SET_LEADERS_LIST:
      return {
        ...state,
        leaders: [
          ...state.leaders,
          (payload as Leader[]).sort(
            (a: Leader, b: Leader) => b.score - a.score
          ),
        ],
      };
    case NEW_CURRENT_DAY:
      return {
        ...state,
        currentDay: state.currentDay + 1,
      };
    case PREV_CURRENT_DAY:
      return {
        ...state,
        currentDay: state.currentDay - 1,
      };
    case NEXT_CURRENT_DAY:
      return {
        ...state,
        currentDay: state.currentDay + 1,
      };

    default:
      return state;
  }
};

export default reducer;
