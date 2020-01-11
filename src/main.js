import './style.scss';
import './view/header/header';
import './view/tools/render_state_tools';
import initCanvas from './canvas/canvas';
import store from './model/store';
import mousePosition from './view/listener/mouse_position';
import selectionTool from './view/listener/selection_tool';
import selectionToolSize from './view/listener/selection_tool_size';
import selectionColor from './view/listener/selection_color';
import seelctionFrame from './view/listener/selection_frame';
import addClearFrame from './view/listener/button_add-frame';
import copyFrame from './view/listener/button_copy-frame';
import addFrame from './controller/frames/copy_frame';
import inputRange from './controller/animation_player/inp_range';
import fullScreen from './view/listener/click_on_frame';

(function init() {
  const canvasSize = 512;
  const context = initCanvas(canvasSize, 'white');
  store.prop = {
    canvasSize,
    tool: 'pencil',
    size: '1',
    color: 'black',
    context,
  };
  mousePosition();
  selectionTool();
  selectionToolSize();
  selectionColor();
  seelctionFrame();
  addClearFrame();
  copyFrame();
  addFrame();
  inputRange();
  fullScreen();
}());
