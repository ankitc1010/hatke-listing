/*
 * Filter Action Names
 *
 */

export const SET_FILTER = "[FILTER] ADD FILTER FIELD";
export const SET_FILTER_TEXT = "[FILTER] SET FILTER TEXT";
export const SET_SORT_BY = "[FILTER] SET SORT BY";
export const SET_SORT_TYPE = "[FILTER] SET SORT TYPE";
export const SET_FILTER_TYPE = "[FILTER] SET FILTER TYPE";

/*
 * Filter Action functions
 *
 */

export const setFilterType = payload => {
  return {
    type: SET_FILTER_TYPE,
    payload
  };
};

export const setFilterText = payload => {
  return {
    type: SET_FILTER_TEXT,
    payload
  };
};

export const setSortBy = payload => {
  return {
    type: SET_SORT_BY,
    payload
  };
};

export const setSortType = payload => {
  return {
    type: SET_SORT_TYPE,
    payload
  };
};

export const addFilter = payload => {
  return async (dispatch, getState) => {
    return {
      type: SET_FILTER,
      payload
    };
  };
};
