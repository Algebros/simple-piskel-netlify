/* eslint-disable import/no-cycle */
import renderMousePos from '../view/render_mouse_position';
import renderStateTools from '../view/tools/render_state_tools';
import renderStateToolsSize from '../view/tools/render_state_tool_size';
import renderSelectedColor from '../view/tools/render_selected_color';
import canvasTool from '../canvas/canvas_tools';
import renderFrame from '../controller/frames/render_frame';
import animationPlayer from '../controller/animation_player/player';
import renderFPS from '../view/render_fps';

export default {
  canvasSize: null,
  tool: null,
  size: null,
  color: null,
  lastColor: null,
  curFrame: null,
  fps: null,
  playerID: null,

  canvasContext: null,
  canvasFrame: [],

  mousePosition: {},
  lastPosition: {},

  posForStroke: [],

  set prop(obj) {
    this.canvasSize = obj.canvasSize || this.canvasSize;
    this.tool = obj.tool || this.tool;
    this.size = obj.size || this.size;
    this.lastColor = this.color;
    this.color = obj.color || this.color;
    this.canvasContext = obj.context || this.canvasContext;
    this.curFrame = obj.indexCanvas || this.curFrame;
    renderStateTools(this.tool);
    renderStateToolsSize(this.size);
    canvasTool(this.tool);
    if (obj.color) renderSelectedColor(this.color, this.lastColor);
  },

  set playerId(obj) {
    this.playerID = obj.playerID || this.playerID;
  },

  set mousePos(obj) {
    this.lastPosition = this.mousePosition;
    this.mousePosition = obj;
    renderMousePos(this.mousePosition);
  },

  set addFrame(imgDataURL) {
    this.canvasFrame.push(imgDataURL);
    this.curFrame = this.canvasFrame.length - 1;
    renderFrame();
    animationPlayer();
  },

  set updateFrame(imgDataURL) {
    this.canvasFrame[this.curFrame] = imgDataURL;
  },

  set setColor(arg) {
    this.lastColor = this.color;
    this.color = arg;
    renderSelectedColor(this.color, this.lastColor);
  },

  set setPositionStroke(pos) {
    this.positionForStoke = pos;
  },

  set FPS(fps) {
    window.cancelAnimationFrame(this.playerID);
    this.fps = fps;
    animationPlayer();
    renderFPS(fps);
  },

  get stateApp() {
    return {
      canvasSize: this.canvasSize,
      tool: this.tool,
      size: this.size,
      color: this.color,
      curFrame: this.curFrame,
      fps: this.fps,
      playerID: this.playerID,

      canvasContext: this.canvasContext,
      canvasFrame: this.canvasFrame,

      mousePosition: this.mousePosition,
      lastPosition: this.lastPosition,

      posForStroke: this.positionForStoke,
    };
  },
};
