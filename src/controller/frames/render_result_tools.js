/* eslint-disable import/no-cycle */
import store from '../../model/store';

export default function () {
  const { curFrame } = store.stateApp;
  const canvas = document.getElementById('canvas');
  const dataURL = canvas.toDataURL();

  const frame = document.querySelector(`canvas[data-index="${curFrame}"]`);
  const ctx = frame.getContext('2d');

  const img = new Image();
  img.src = dataURL;

  const startPos = 0;

  img.onload = () => {
    ctx.drawImage(img,
      startPos,
      startPos,
      canvas.width,
      canvas.height,
      startPos,
      startPos,
      frame.width,
      frame.height);
  };

  store.updateFrame = dataURL;
}
