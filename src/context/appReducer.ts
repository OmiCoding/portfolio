import { AppReducer } from './contextTypes';
import { INIT_DEVICE } from './types';

const appReducer: AppReducer = function (state, action) {
  switch (action.type) {
    case INIT_DEVICE:
      if (typeof action.data !== 'string') {
        return {
          ...state,
        };
      }
      return {
        ...state,
        device: action.data,
      };
    default:
      return {
        ...state,
      };
  }
};

export default appReducer;
