// import axios from "axios";

/*
 * Coins Action Names
 *
 */

export const FETCH_LIST = "[FETCH] FETCH BASIC LIST";

/*
 * Coins Action functions
 *
 */

export const fetchList = payload => {
  return async (dispatch, getState) => {
    // const list = await axios.get("http://bitbns.com/jugApi/coinParams.json", {
    //   headers: {
    //     "Access-Control-Allow-Credentials": true,
    //     "Access-Control-Allow-Origin": "*",
    //     "Access-Control-Allow-Methods": "GET",
    //     "Access-Control-Allow-Headers": "application/json"
    //   }
    // });
    // console.log(list);
    return {
      type: FETCH_LIST,
      payload
    };
  };
};
