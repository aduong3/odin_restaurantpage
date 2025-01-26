import "../styles/menu.styles.css";
import yakitoriPNG from "../assets/images/yakitori.png";
import karaagePNG from "../assets/images/karaage.png";
import takoyakiPNG from "../assets/images/takoyaki.png";
import sapporoPNG from "../assets/images/sapporoBeer.png";
import sakePNG from "../assets/images/sake.png";
import mochiPNG from "../assets/images/mochi.png";

export default function menu() {
  const content = document.querySelector("#content");
  content.textContent = "";

  const menuDiv = document.createElement("div");
  menuDiv.classList.add("menuDiv");

  //-----------------------YAKITORI----------------------------------------
  const yakitoriDiv = document.createElement("div");

  const yakitori = document.createElement("img");
  const yakitoriTitle = document.createElement("h2");
  const yakitoriDesc = document.createElement("p");
  const yakitoriPrice = document.createElement("p");

  yakitoriTitle.textContent = "Yakitori";
  yakitoriDesc.textContent = "Served as a small place of 2-3 skewers.";
  yakitoriPrice.textContent = "$6.50";

  yakitori.src = yakitoriPNG;
  yakitori.alt = "yakitori";

  yakitori.classList.add("yakitori");
  yakitoriTitle.classList.add("yakitoriTitle");
  yakitoriDiv.classList.add("yakitoriDiv");
  yakitoriPrice.classList.add("yakitoriPrice");
  yakitoriDesc.classList.add("yakitoriDesc");

  yakitoriDiv.appendChild(yakitori);
  yakitoriDiv.appendChild(yakitoriTitle);
  yakitoriDiv.appendChild(yakitoriDesc);
  yakitoriDiv.appendChild(yakitoriPrice);

  //-----------------------KARAAGE-------------------------------------------
  const karaageDiv = document.createElement("div");

  const karaage = document.createElement("img");
  const karaageTitle = document.createElement("h2");
  const karaageDesc = document.createElement("p");
  const karaagePrice = document.createElement("p");

  karaageTitle.textContent = "Karaage";
  karaageDesc.textContent = "Comes with a side of dipping sauce";
  karaagePrice.textContent = "$4.50";

  karaage.src = karaagePNG;
  karaage.alt = "karaage";

  karaage.classList.add("karaage");
  karaageTitle.classList.add("karaageTitle");
  karaageDiv.classList.add("karaageDiv");
  karaagePrice.classList.add("karaagePrice");
  karaageDesc.classList.add("karaageDesc");

  karaageDiv.appendChild(karaage);
  karaageDiv.appendChild(karaageTitle);
  karaageDiv.appendChild(karaageDesc);
  karaageDiv.appendChild(karaagePrice);

  //-----------------------TAKOYAKI-------------------------------------------

  const takoyakiDiv = document.createElement("div");

  const takoyaki = document.createElement("img");
  const takoyakiTitle = document.createElement("h2");
  const takoyakiDesc = document.createElement("p");
  const takoyakiPrice = document.createElement("p");

  takoyakiTitle.textContent = "Takoyaki";
  takoyakiDesc.textContent = "Standard portion is 6pc";
  takoyakiPrice.textContent = "$7.50";

  takoyaki.src = takoyakiPNG;
  takoyaki.alt = "takoyaki";

  takoyaki.classList.add("takoyaki");
  takoyakiTitle.classList.add("takoyakiTitle");
  takoyakiDiv.classList.add("takoyakiDiv");
  takoyakiPrice.classList.add("takoyakiPrice");
  takoyakiDesc.classList.add("takoyakiDesc");

  takoyakiDiv.appendChild(takoyaki);
  takoyakiDiv.appendChild(takoyakiTitle);
  takoyakiDiv.appendChild(takoyakiDesc);
  takoyakiDiv.appendChild(takoyakiPrice);

  //-----------------------SAPORRO BEER-------------------------------------------

  const sapporoDiv = document.createElement("div");

  const sapporo = document.createElement("img");
  const sapporoTitle = document.createElement("h2");
  const sapporoDesc = document.createElement("p");
  const sapporoPrice = document.createElement("p");

  sapporoTitle.textContent = "Sapporo Beer";
  sapporoDesc.textContent = "Served in bottle with glass side";
  sapporoPrice.textContent = "$5.50";

  sapporo.src = sapporoPNG;
  sapporo.alt = "sapporo beer";

  sapporo.classList.add("sapporo");
  sapporoTitle.classList.add("sapporoTitle");
  sapporoDiv.classList.add("sapporoDiv");
  sapporoPrice.classList.add("sapporoPrice");
  sapporoDesc.classList.add("sapporoDesc");

  sapporoDiv.appendChild(sapporo);
  sapporoDiv.appendChild(sapporoTitle);
  sapporoDiv.appendChild(sapporoDesc);
  sapporoDiv.appendChild(sapporoPrice);

  //-----------------------SAKE-------------------------------------------

  const sakeDiv = document.createElement("div");

  const sake = document.createElement("img");
  const sakeTitle = document.createElement("h2");
  const sakeDesc = document.createElement("p");
  const sakePrice = document.createElement("p");

  sakeTitle.textContent = "Rihaku Sake";
  sakeDesc.textContent = "180ml, perfect for 1-2 people";
  sakePrice.textContent = "$11.00";

  sake.src = sakePNG;
  sake.alt = "rihaku sake";

  sake.classList.add("sake");
  sakeTitle.classList.add("sakeTitle");
  sakeDiv.classList.add("sakeDiv");
  sakePrice.classList.add("sakePrice");
  sakeDesc.classList.add("sakeDesc");

  sakeDiv.appendChild(sake);
  sakeDiv.appendChild(sakeTitle);
  sakeDiv.appendChild(sakeDesc);
  sakeDiv.appendChild(sakePrice);

  //-----------------------SAKE-------------------------------------------

  const mochiDiv = document.createElement("div");

  const mochi = document.createElement("img");
  const mochiTitle = document.createElement("h2");
  const mochiDesc = document.createElement("p");
  const mochiPrice = document.createElement("p");

  mochiTitle.textContent = "Mochi";
  mochiDesc.textContent = "2pc - Peach, Strawberry, Matcha";
  mochiPrice.textContent = "$5.00";

  mochi.src = mochiPNG;
  mochi.alt = "mochi ice cream";

  mochi.classList.add("mochi");
  mochiTitle.classList.add("mochiTitle");
  mochiDiv.classList.add("mochiDiv");
  mochiPrice.classList.add("mochiPrice");
  mochiDesc.classList.add("mochiDesc");

  mochiDiv.appendChild(mochi);
  mochiDiv.appendChild(mochiTitle);
  mochiDiv.appendChild(mochiDesc);
  mochiDiv.appendChild(mochiPrice);

  menuDiv.appendChild(yakitoriDiv);
  menuDiv.appendChild(karaageDiv);
  menuDiv.appendChild(takoyakiDiv);
  menuDiv.appendChild(sapporoDiv);
  menuDiv.appendChild(sakeDiv);
  menuDiv.appendChild(mochiDiv);

  content.appendChild(menuDiv);
}
