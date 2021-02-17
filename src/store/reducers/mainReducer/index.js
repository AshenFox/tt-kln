/* import {} from '../../types'; */
import initState from "./initState";

const MainReducer = (state = initState, action) => {
  const { payload, type } = action;

  switch (type) {
    /* case SET_IS_SERVER:
        return {
          ...state,
          is_server: payload.value,
        }; */
    default:
      return state;
  }
};

export default MainReducer;
