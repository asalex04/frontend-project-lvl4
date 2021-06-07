// @ts-check

import 'core-js';
import 'regenerator-runtime';

import '../assets/application.scss';
// import gon from 'gon';
import run from './init.jsx';

if (process.env.NODE_ENV !== 'production') {
  localStorage.debug = 'chat:*';
}

run();
/* const p = document.createElement('p');
p.classList.add('card-text');
p.textContent = 'It works!';

const h5 = document.createElement('h5');
h5.classList.add('card-title');
h5.textContent = 'Project frontend l4 ';

const cardBody = document.createElement('div');
cardBody.classList.add('card-body');
cardBody.append(h5, p);

const card = document.createElement('div');
card.classList.add('card', 'text-center');
card.append(cardBody);

const container = document.querySelector('#chat');
container.append(card);

console.log('it works!');
console.log('gon', gon); */
