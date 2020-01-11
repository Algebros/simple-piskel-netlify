import copyFrame from '../../controller/frames/copy_frame';

export default function buttonFrame() {
  const btnFrame = document.querySelector('.frames .frames__copy-frame');
  btnFrame.addEventListener('click', copyFrame);
}
