import { Outlet } from 'react-router-dom';
import Header from './header/Header';
import HBMenu from './header/HBMenu';

const Root = function () {
  return (
    <main className="main">
      <Header />
      <HBMenu />
      <Outlet />
    </main>
  );
};

export default Root;
