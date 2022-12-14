import { combineReducers } from "redux";
import { positionReducer } from "./positions/position-redusers";
import { filterReducer } from "./filters/filter-redusers";

export const rootReducer = combineReducers({
  positions: positionReducer,
  filters: filterReducer,
});
