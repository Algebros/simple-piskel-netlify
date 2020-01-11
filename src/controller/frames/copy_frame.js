import './frame.scss';
import store from '../../model/store';

export default function addFrame() {
  const canvas = document.getElementById('canvas');
  const img = canvas.toDataURL();
  store.addFrame = img;
}
