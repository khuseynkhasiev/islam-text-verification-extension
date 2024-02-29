// content.js

console.log('подключен content.js');

const link = document.createElement('link');
link.rel = 'stylesheet';
link.type = 'text/css';
link.href = chrome.runtime.getURL('css/content.css');
document.head.appendChild(link);

const body = document.querySelector('body');
const divContainer = document.createElement('div');

const buttonPostAllText = document.createElement('button');
buttonPostAllText.classList.add('buttonPostAllText');
buttonPostAllText.textContent = 'Проверить';

body.appendChild(buttonPostAllText);

buttonPostAllText.addEventListener('click', () => {
    let text = getAllText();
    console.log(text);
});
