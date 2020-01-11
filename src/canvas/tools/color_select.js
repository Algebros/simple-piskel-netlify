/* eslint-disable import/no-cycle */
import store from '../../model/store';

function rgbStringToHex(rgb) {
  const arr = rgb.split(/\D+/);
  let hex = '';
  arr.forEach((element) => {
    if (element !== '') {
      if (+element < 10) {
        hex += `0${element}`;
      } else {
        hex += Number(element).toString(16);
      }
    }
  });
  return `#${hex}`;
}

function palettePicker({ pageX, pageY }) {
  const canvas = document.getElementById('canvas');
  const rect = canvas.getBoundingClientRect();
  const x = pageX - rect.x;
  const y = pageY - rect.y;
  const c = canvas.getContext('2d');
  const p = c.getImageData(x, y, 1, 1).data;
  const hex = rgbStringToHex(`(${p[0]}, ${p[1]}, ${p[2]})`);
  store.setColor = hex;
}

export { palettePicker, rgbStringToHex };
