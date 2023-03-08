import { ReactElement, Reducer, useReducer, useCallback } from 'react';
import appReducer from './appReducer';
import AppContext from './AppContext';
import { Action, InitDevice, InitState } from './contextTypes';

const AppProvider: React.FC<Props> = function ({ children }) {
  const [state, dispatch] = useReducer<Reducer<InitState, Action>>(appReducer, {
    device: '',
    modal: false,
    hb: false,
    initDevice: () => {},
  });

  const initDevice = useCallback<InitDevice>(
    (device: string) => {
      if (device === state.device) return;
      return dispatch({
        type: 'INIT_DEVICE',
        data: device,
      });
    },
    [state.device],
  );

  const modalActive = function () {
    return dispatch({
      type: 'MODAL_ACTIVE',
    });
  };

  const hbActive = function () {
    return dispatch({
      type: 'HB_ACTIVE',
    });
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        initDevice,
        modalActive,
        hbActive,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;

interface Props {
  children: ReactElement;
}
