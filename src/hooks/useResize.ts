import { useContext, useEffect, useMemo } from 'react';
import debounce from 'lodash.debounce';
import AppContext from '../context/AppContext';

const useResize = function () {
  const appContext = useContext(AppContext);
  const { device, initDevice } = appContext;

  const resizeMemo = useMemo(
    () =>
      debounce(() => {
        window.innerWidth < 1280 ? initDevice('mobile') : initDevice('desktop');
      }, 1000),
    [initDevice],
  );

  useEffect(() => {
    if (device === '') {
      window.innerWidth < 1280 ? initDevice('mobile') : initDevice('desktop');
    }
    window.addEventListener('resize', resizeMemo);

    return () => {
      window.removeEventListener('resize', resizeMemo);
    };
  }, [device, initDevice, resizeMemo]);
};

export default useResize;
