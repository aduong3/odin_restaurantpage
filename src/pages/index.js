import homePage from './homepage.js';
import menu from './menu.js';
import about from './about.js';
import '../styles/index.styles.css';

const headerLogo = document.querySelector(".header-logo");
const izakaya = document.createElement("h2");
izakaya.textContent = "IZAKAYA SHINO";
izakaya.classList.add("izakayaLogo");
headerLogo.appendChild(izakaya);



const homePageButton = document.querySelector('.home');
const menuButton = document.querySelector('.menu');
const aboutButton = document.querySelector('.about');
homePageButton.addEventListener('click', homePage);
menuButton.addEventListener('click', menu);
aboutButton.addEventListener('click', about);





homePage();

