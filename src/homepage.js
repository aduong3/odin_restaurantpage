import izakayaBackground from "../assets/images/izakaya.jpg";
import "./homepage.styles.css";
export function homePage() {
  //console.log("testing homePage");

  const content = document.querySelector("#content");
  const heroDiv = document.createElement("div");

  const heroText = document.createElement("h1");
  const heroTranslate = document.createElement("p");

  heroText.textContent = "「 居酒屋しのへようこそ 」";
  heroTranslate.textContent = "「 Welcome to Izakaya Shino 」";

  heroDiv.classList.add("heroDiv");
  heroText.classList.add("welcomeText");
  heroTranslate.classList.add("welcomeTranslate");

  heroDiv.appendChild(heroText);
  heroDiv.appendChild(heroTranslate);
  content.appendChild(heroDiv);
}
