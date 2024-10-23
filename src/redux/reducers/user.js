const intialState = {};
const SAVE_USER = 'SAVE_USER';

const saveUser = (data) => (dispatch) => {
  dispatch({ type: SAVE_USER, data });
};

// eslint-disable-next-line default-param-last
const userReducer = (state = intialState, action) => {
  switch (action.type) {
    case SAVE_USER:
      return { ...action.data, ...state };
    default:
      return state;
  }
};

export default userReducer;
export { saveUser };
