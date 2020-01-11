import getCurrentColor from '../../controller/get_current_color';

export default function selectionColor() {
  const curColor = document.querySelector('.input[type="color"]');
  curColor.addEventListener('input', getCurrentColor);
}
