import * as types from "./ActionType";
import axios from "axios";

export const DepositAction = (payload) => {
  return async (dispatch) => {
    try {
      const res = await axios.post(`http://localhost:5000/deposit`, payload);
      dispatch({
        type: types.DEPOSIT,
        payload: res.data.user
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const WithdrawnAction = (payload) => {
    console.log("Money: ", payload);
    return async (dispatch) => {
      try {
        const res = await axios.post(`http://localhost:5000/withdraw`, payload);
        dispatch({
          type: types.WITHDRAWN,
          payload: res.data.user,
        });
      } catch (error) {
        console.log(error);
      }
    };
  };

export const CheckBalanceAction = (payload) => {
    return async (dispatch) => {
        try {
          const res = await axios.get(`http://localhost:5000/balance/${payload}`);
          dispatch({
            type: types.BALANCE,
            payload: res.data.user,
          });
        } catch (error) {
          console.log(error);
        }
      };
};