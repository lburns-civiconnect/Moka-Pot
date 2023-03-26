export const SET_OPEN = "SET_OPEN";
export const SET_INDEX = "SET_INDEX";
export const SET_OPEN_GROUP = "SET_OPEN_GROUP";

export const setOpen = (open) => {
  return async (dispatch) => {
    dispatch({
      type: SET_OPEN,
      open: open,
    });
  };
};
export const setOpenGroup = (group) => {
  return async (dispatch) => {
    dispatch({
      type: SET_OPEN_GROUP,
      group: group,
    });
  };
};
export const setIndex = (index) => {
  return async (dispatch) => {
    dispatch({
      type: SET_INDEX,
      index: index,
    });
  };
};
