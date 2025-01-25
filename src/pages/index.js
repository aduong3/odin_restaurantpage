import homePage from './homepage.js';
import menu from './menu.js';
import '../styles/index.styles.css';

const headerLogo = document.querySelector(".header-logo");
const izakaya = document.createElement("h2");
izakaya.textContent = "IZAKAYA SHINO";
izakaya.classList.add("izakayaLogo");
headerLogo.appendChild(izakaya);



const homePageButton = document.querySelector('.home');
const menuButton = document.querySelector('.menu');
homePageButton.addEventListener('click', homePage);
menuButton.addEventListener('click', menu);





homePage();

