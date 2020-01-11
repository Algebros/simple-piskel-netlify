import store from '../model/store';

export default function getTool(event) {
  if (event.target.dataset.tool !== undefined) {
    store.prop = {
      tool: event.target.dataset.tool,
    };
  }
}
