import * as types from "./ActionType";

const init = { userData: {}};

export const Reducer = (state = init, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.DEPOSIT:
      return {
        ...state,
        userData: payload
      };

    case types.WITHDRAWN:
      return {
        ...state,
        userData: payload
      };

    case types.BALANCE:
      return {
        ...state,
        userData: payload
      };

    default:
      return state;
  }
};