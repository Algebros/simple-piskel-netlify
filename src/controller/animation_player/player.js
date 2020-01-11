/* eslint-disable import/no-cycle */
import './animation_player.scss';
import store from '../../model/store';

export default function player() {
  const canvas = document.querySelector('.animation-player__frames');
  const ctx = canvas.getContext('2d');

  const { canvasFrame, fps } = store.stateApp;
  let frameCount = 0;
  const lengthFrames = canvasFrame.length - 1;
  const fpsInterval = 1000 / fps;
  let then = Date.now();

  let elapsed;
  let now;

  function animate() {
    now = Date.now();
    elapsed = now - then;

    if (elapsed > fpsInterval) {
      then = now - (elapsed % fpsInterval);

      if (frameCount > lengthFrames) frameCount = 0;
      const img = new Image();
      img.src = canvasFrame[frameCount];
      const startPos = 0;
      const imgSize = 512;
      const frameSize = 200;

      img.onload = () => {
        ctx.drawImage(img,
          startPos,
          startPos,
          imgSize,
          imgSize,
          startPos,
          startPos,
          frameSize,
          frameSize);
      };

      frameCount += 1;
    }

    const playerID = window.requestAnimationFrame(animate);
    store.playerId = { playerID };
  }
  animate();
}
