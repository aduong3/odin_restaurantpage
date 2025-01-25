import "../styles/menu.styles.css";

export default function menu() {
  const content = document.querySelector("#content");
  content.textContent = '';

  const test = document.createElement('p');
  test.textContent = 'test';

  content.appendChild(test);
}
