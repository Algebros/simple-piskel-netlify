/* eslint-disable import/no-cycle */
import store from '../../model/store';

// https://stackoverflow.com/questions/4672279/bresenham-algorithm-in-javascript //
function bresenham(startCoordinates, endCoordinates) {
  const coordinatesArray = [];
  // Translate coordinates
  let x1 = startCoordinates[0];
  let y1 = startCoordinates[1];
  const x2 = endCoordinates[0];
  const y2 = endCoordinates[1];
  // Define differences and error check
  const dx = Math.abs(x2 - x1);
  const dy = Math.abs(y2 - y1);
  const sx = (x1 < x2) ? 1 : -1;
  const sy = (y1 < y2) ? 1 : -1;
  let err = dx - dy;
  // Set first coordinates
  coordinatesArray.push([x1, y1]);
  // Main loop
  while (!((x1 === x2) && (y1 === y2))) {
    // const e2 = err << 1;
    const e2 = err * 2;
    if (e2 > -dy) {
      err -= dy;
      x1 += sx;
    }
    if (e2 < dx) {
      err += dx;
      y1 += sy;
    }
    // Set coordinates
    coordinatesArray.push([x1, y1]);
  }
  // Return the result
  return coordinatesArray;
}

export default function eraser() {
  const {
    mousePosition,
    lastPosition,
    canvasContext,
    size,
  } = store.stateApp;
  const start = [mousePosition.x, mousePosition.y];
  const end = [lastPosition.x, lastPosition.y];
  const arr = bresenham(start, end);
  for (let i = 0; i < arr.length; i += 1) {
    canvasContext.fillStyle = 'white';
    canvasContext.fillRect(arr[i][0] * size, arr[i][1] * size, size, size);
  }
}
