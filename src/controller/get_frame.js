import store from '../model/store';

export default function (event) {
  if (event.target.tagName === 'CANVAS') {
    const active = document.querySelector('.active');
    if (active) active.classList.remove('active');
    event.target.classList.add('active');
    const indexCanvas = event.target.dataset.index;
    const { canvasFrame } = store.stateApp;
    const selectFrame = canvasFrame[indexCanvas];

    const img = new Image();
    img.src = selectFrame;

    const canvas = document.getElementById('canvas');
    const ctxCurrent = canvas.getContext('2d');

    const startPos = 0;
    img.onload = () => {
      ctxCurrent.drawImage(
        img,
        startPos, startPos,
        canvas.width, canvas.height,
        startPos, startPos,
        canvas.width, canvas.height,
      );
    };
    store.prop = { indexCanvas };
  }
}
