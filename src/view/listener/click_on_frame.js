import fullScrin from '../../controller/animation_player/fullscrin';

export default function () {
  const player = document.querySelector('.animation-player__frames');
  player.addEventListener('click', fullScrin);
}
