import './canvas.scss';

export default function initCanvas(size, fillColor) {
  const canvas = document.getElementById('canvas');
  const context = canvas.getContext('2d');
  canvas.width = size;
  canvas.height = size;
  context.fillStyle = fillColor;
  context.fillRect(0, 0, canvas.width, canvas.height);
  return context;
}
