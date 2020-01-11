export default function renderSelectColor(color, lastCol) {
  const inpColor = document.querySelector('.current-color .input');
  const lastColor = document.querySelector('.prev-color');
  lastColor.style.backgroundColor = lastCol;
  inpColor.value = color;
}
