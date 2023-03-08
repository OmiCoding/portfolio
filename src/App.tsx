import { createPortal } from 'react-dom';
import Hero from './components/hero/Hero';
import Modal from './components/modal/Modal';

function App() {
  return (
    <>
      <Hero />
      {createPortal(<Modal />, document.body)}
    </>
  );
}

export default App;
