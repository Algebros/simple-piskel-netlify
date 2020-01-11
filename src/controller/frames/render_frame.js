/* eslint-disable import/no-cycle */
import store from '../../model/store';

export default function renderFrame() {
  const { canvasFrame } = store.stateApp;

  const lastIndex = canvasFrame.length - 1;
  const curFrame = canvasFrame[lastIndex];

  const newFrame = document.createElement('canvas');
  newFrame.width = 100;
  newFrame.height = 100;
  const ctx = newFrame.getContext('2d');
  newFrame.id = `frame-${lastIndex}`;
  newFrame.dataset.index = lastIndex;

  const img = new Image();
  img.src = curFrame;

  const startPos = 0;
  const canvas = document.getElementById('canvas');
  img.onload = () => {
    ctx.drawImage(
      img,
      startPos,
      startPos,
      canvas.width,
      canvas.height,
      startPos,
      startPos,
      newFrame.width,
      newFrame.height,
    );
  };

  const ul = document.querySelector('.frames__list');
  const li = document.createElement('li');
  li.classList.add('item');
  li.append(newFrame);
  ul.append(li);
}
