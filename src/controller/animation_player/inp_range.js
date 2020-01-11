import store from '../../model/store';

export default function () {
  const inpRange = document.getElementById('FPS');
  store.FPS = inpRange.value;
  inpRange.addEventListener('input', (e) => {
    const { playerID } = store.stateApp;
    window.cancelAnimationFrame(playerID);
    store.FPS = e.target.value;
  });
}
