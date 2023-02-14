import { createContext } from 'react';
import { InitState } from './contextTypes';

const AppContext = createContext<InitState>({
  device: '',
  initDevice: () => {},
});

export default AppContext;
