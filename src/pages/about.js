import "../styles/about.styles.css";

export default function about() {
  const body = document.querySelector("body");
  const html = document.querySelector("html");
  body.style.height = "-webkit-fill-available";
  html.style.html = "-webkit-fill-available";

  const content = document.querySelector("#content");
  content.textContent = "";

  const aboutDiv = document.createElement("div");
  aboutDiv.classList.add("aboutDiv");

  const aboutStoreDiv = document.createElement("div");
  aboutStoreDiv.classList.add("aboutStoreDiv");

  const aboutStoreQuestion = document.createElement("h1");
  aboutStoreQuestion.classList.add("aboutStoreQuestion");
  aboutStoreQuestion.textContent = "What is Izayaka Shino?";

  const aboutStore = document.createElement("h2");
  aboutStore.textContent =
    "Izakaya Shino was born from a love of Japanese street food and the warm, cozy atmosphere of traditional izakayas. Inspired by late-night conversations over sake and grilled yakitori, our mission is to create a space where everyone feels welcome.";
  aboutStore.classList.add("aboutStore");

  aboutStoreDiv.appendChild(aboutStoreQuestion);
  aboutStoreDiv.appendChild(aboutStore);
  aboutDiv.appendChild(aboutStoreDiv);
  //------------------------------------------------------OPENING HOURS---------------------------------------------------
  //Thursday – Saturday: 5:30 PM – 1:00 AM
  //Sunday: 6:00 PM – 10:00 PM
  const openHoursDiv = document.createElement("div");
  openHoursDiv.classList.add("openHoursDiv");

  const openHoursTitle = document.createElement("h1");
  openHoursTitle.classList.add("openHoursTitle");
  openHoursTitle.textContent = "Open Times";

  const openHoursTimeDiv = document.createElement("div");
  openHoursTimeDiv.classList.add("openHoursTimeDiv");

  const openHoursMonWed = document.createElement("p");
  openHoursMonWed.classList.add("openHours", "openHoursMW");
  openHoursMonWed.textContent = "Monday - Wednesday: 6:00 PM - 11:00 PM";

  const openHoursThuSat = document.createElement("p");
  openHoursThuSat.classList.add("openHours", "openHoursThSa");
  openHoursThuSat.textContent = "Thursday - Saturday: 5:30 PM - 1:00 AM";

  const openHoursSun = document.createElement("p");
  openHoursSun.classList.add("openHours", "openHoursSu");
  openHoursSun.textContent = "Sunday: 6:00 PM - 10:00 PM";

  openHoursDiv.appendChild(openHoursTitle);
  openHoursTimeDiv.appendChild(openHoursMonWed);
  openHoursTimeDiv.appendChild(openHoursThuSat);
  openHoursTimeDiv.appendChild(openHoursSun);
  openHoursDiv.appendChild(openHoursTimeDiv);

  aboutDiv.appendChild(openHoursDiv);

  content.appendChild(aboutDiv);
}
