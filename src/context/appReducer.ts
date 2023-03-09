import { AppReducer } from './contextTypes';
import { INIT_DEVICE, MODAL_ACTIVE, HB_ACTIVE } from './types';

const appReducer: AppReducer = function (state, action) {
  switch (action.type) {
    case INIT_DEVICE:
      if (typeof action.data !== 'string') {
        return {
          ...state,
        };
      }

      if (action.data === 'desktop') {
        if (!state.initAnim) {
          return {
            ...state,
            device: action.data,
            hb: false,
            initAnim: true,
          };
        }
        return {
          ...state,
          device: action.data,
          hb: false,
        };
      } else if (action.data === 'mobile') {
        return {
          ...state,
          device: action.data,
          modal: false,
        };
      } else {
        return {
          ...state,
        };
      }
    case MODAL_ACTIVE:
      return {
        ...state,
        modal: !state.modal,
      };
    case HB_ACTIVE:
      return {
        ...state,
        hb: !state.hb,
      };
    default:
      return {
        ...state,
      };
  }
};

export default appReducer;
