import store from '../model/store';

export default function getToolSize(event) {
  if (event.target.dataset.size !== null) {
    store.prop = {
      size: event.target.dataset.size,
    };
  }
}
