import { AppReducer } from './contextTypes';
import { INIT_DEVICE, MODAL_ACTIVE } from './types';

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
    case MODAL_ACTIVE:
      return {
        ...state,
        modal: !state.modal,
      };
    default:
      return {
        ...state,
      };
  }
};

export default appReducer;
