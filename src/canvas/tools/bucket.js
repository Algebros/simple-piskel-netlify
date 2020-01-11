/* eslint-disable import/no-cycle */
import store from '../../model/store';

export default function () {
  const { canvasContext, color } = store.stateApp;
  canvasContext.fillStyle = color;
  canvasContext.fillRect(0, 0, 512, 512);
}
