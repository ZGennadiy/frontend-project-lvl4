// import 'core-js/stable/index.js';
import ReactDOM from 'react-dom';
// import { createRoot } from 'react-dom/client';
import 'regenerator-runtime/runtime.js';
import '../assets/application.scss';
import app from './init.jsx';

if (process.env.NODE_ENV !== 'production') {
  localStorage.debug = 'chat:*';
}

// const p = document.createElement('p');
// p.classList.add('card-text');
// p.textContent = 'It works!';

// const h5 = document.createElement('h5');
// h5.classList.add('card-title');
// h5.textContent = 'Project frontend l4 boilerplate';

// const cardBody = document.createElement('div');
// cardBody.classList.add('card-body');
// cardBody.append(h5, p);

// const card = document.createElement('div');
// card.classList.add('card', 'text-center');
// card.append(cardBody);

// const container = document.querySelector('#chat');
// container.append(card);

console.log('it works!');
const runApp = async () => {
  const mainContainer = document.getElementById('chat');

  console.log('it works!', mainContainer);
  const reactDOM = await app();

  // const root = createRoot(mainContainer);
  console.log(reactDOM);
  ReactDOM.render(reactDOM, mainContainer);

  // root.render(reactDOM);
};

runApp();
