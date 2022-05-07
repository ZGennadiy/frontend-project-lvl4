import { createRoot } from 'react-dom/client';
import 'regenerator-runtime/runtime.js';
import '../assets/application.scss';
import app from './init.jsx';

const runApp = () => {
  if (process.env.NODE_ENV !== 'production') {
    localStorage.debug = 'chat:*';
  }
  const mainContainer = document.getElementById('chat');

  const reactDOM = app();
  const root = createRoot(mainContainer);

  root.render(reactDOM);
};

runApp();
