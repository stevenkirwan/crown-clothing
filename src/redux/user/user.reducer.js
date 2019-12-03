// set the initial setr to null
const INITIAL_STATE = {
  currentUser: null
};

/**
 *
 * @param {*} state
 * @param {*} action
 * set the state to INITIAL_STATE.
 * Check action.type. If action.type = `SET_CURRENT_USER` spread in current state and payload and cause a re-render.
 * otherwise do nothing.
 */
const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_CURRENT_USER":
      return {
        ...state,
        currentUser: action.payload
      };
    default:
      return state;
  }
};

export default userReducer;
