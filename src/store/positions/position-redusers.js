import { ADD_POSITIONS, addPositions } from "./position-actions";
import { act } from "react-dom/test-utils";

export const positionReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_POSITIONS: {
      return action.positions;
    }
    default: {
      return state;
    }
  }
};
