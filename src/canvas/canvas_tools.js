/* eslint-disable import/no-cycle */
import { pencil as pencilTool } from './tools/pencil';
import { palettePicker as dropperTool } from './tools/color_select';
import eraserTool from './tools/eraser';
import { strokeTool, startPosition } from './tools/stroke';
import updateFrame from '../controller/frames/render_result_tools';
import bucketTool from './tools/bucket';

const tools = {

  pencil(event) {
    const canvas = document.getElementById('canvas');
    if (event.button === 0) {
      canvas.addEventListener('mousemove', pencilTool);

      canvas.addEventListener('mouseup', () => {
        updateFrame();
        canvas.removeEventListener('mousemove', pencilTool);
      }, { once: true });

      canvas.addEventListener('mouseout', () => {
        updateFrame();
        canvas.removeEventListener('mousemove', pencilTool);
      }, { once: true });
    }
  },

  colorSelect(event) {
    const { pageX } = event;
    const { pageY } = event;
    dropperTool({ pageX, pageY });
  },

  eraser(event) {
    const canvas = document.getElementById('canvas');
    if (event.button === 0) {
      canvas.addEventListener('mousemove', eraserTool);

      canvas.addEventListener('mouseup', () => {
        updateFrame();
        canvas.removeEventListener('mousemove', eraserTool);
      }, { once: true });

      canvas.addEventListener('mouseout', () => {
        updateFrame();
        canvas.removeEventListener('mousemove', eraserTool);
      }, { once: true });
    }
  },

  stroke(event) {
    const canvas = document.getElementById('canvas');
    if (event.button === 0) {
      startPosition();
      canvas.addEventListener('mousemove', strokeTool);

      canvas.addEventListener('mouseup', () => {
        updateFrame();
        canvas.removeEventListener('mousemove', strokeTool);
      }, { once: true });

      canvas.addEventListener('mouseout', () => {
        updateFrame();
        canvas.removeEventListener('mousemove', strokeTool);
      }, { once: true });
    }
  },

  bucket() {
    bucketTool();
    updateFrame();
  },
};

export default function canvasTool(currentTool) {
  const canvas = document.getElementById('canvas');

  Object.keys(tools).forEach((tool) => {
    canvas.removeEventListener('mousedown', tools[tool]);
  });
  canvas.addEventListener('mousedown', tools[currentTool]);
}
