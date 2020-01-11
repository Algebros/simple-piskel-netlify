// import addClearFrame from '../../frames/add_clear_frame';
import addClearFrame from '../../controller/frames/add_clear_frame';

export default function buttonFrame() {
  const btnFrame = document.querySelector('.frames .frames__add-frame');
  btnFrame.addEventListener('click', addClearFrame);
}
