import { Outlet } from 'react-router-dom';
import Header from './header/Header';

const Root = function () {
  return (
    <main className="main">
      <Header />
      <Outlet />
    </main>
  );
};

export default Root;
