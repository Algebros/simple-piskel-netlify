import store from '../model/store';

export default function getMousePos(event) {
  const canvas = document.getElementById('canvas');
  const rect = canvas.getBoundingClientRect();

  const grid = store.stateApp.canvasSize / store.stateApp.size;
  const { size } = store;

  const x = Math.abs(Math.round((event.clientX - rect.left - (size / 2)) / size));
  const y = Math.abs(Math.round((event.clientY - rect.top - (size / 2)) / size));
  if (x >= 0 && x < grid && y >= 0 && y < grid) store.mousePos = { x, y };
}
