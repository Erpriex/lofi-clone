import { SET_MODE } from '../constantsType/actionType';

const getInitialMode = () => {
  const currentHour = new Date().getHours();
  return currentHour >= 7 && currentHour < 20 ? 'day' : 'night';
};

const INITIAL_STATE = {
  mode: getInitialMode(),
};

const modeReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_MODE:
      return {
        ...state,
        mode: action.mode,
      };
    default:
      return state;
  }
};

export default modeReducer;
