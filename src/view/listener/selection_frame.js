import getFrame from '../../controller/get_frame';

export default function () {
  const listFrames = document.querySelector('.frames__list');
  listFrames.addEventListener('click', getFrame);
}
