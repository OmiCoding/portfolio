import { createContext } from 'react';
import { InitState } from './contextTypes';

const AppContext = createContext<InitState>({
  device: '',
  modal: false,
  hb: false,
  initAnim: false,
  initDevice: () => {},
});

export default AppContext;
