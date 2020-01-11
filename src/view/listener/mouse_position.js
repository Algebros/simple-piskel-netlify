import getMousePos from '../../controller/get_mouse_pos';

function mousePosition() {
  const canvas = document.getElementById('canvas');
  canvas.addEventListener('mousemove', getMousePos);
}

export default mousePosition;
