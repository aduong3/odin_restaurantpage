import { homePage } from './homepage.js';
import './index.styles.css';

const headerLogo = document.querySelector(".header-logo");
const izakaya = document.createElement("h2");
izakaya.textContent = "IZAKAYA SHINO";
izakaya.classList.add("izakayaLogo");
headerLogo.appendChild(izakaya);

homePage();