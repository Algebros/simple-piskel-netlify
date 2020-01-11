import store from '../model/store';

export default function getCurrentColor(event) {
  store.prop = {
    color: event.target.value,
  };
}
