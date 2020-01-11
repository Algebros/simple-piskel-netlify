export default function () {
  // http://qnimate.com/full-screen-api-tutorial-with-demo/
  function fullScreen() {
    if ('fullscreenEnabled' in document || 'webkitFullscreenEnabled' in document || 'mozFullScreenEnabled' in document || 'msFullscreenEnabled' in document) {
      if (document.fullscreenEnabled
        || document.webkitFullscreenEnabled
        || document.mozFullScreenEnabled
        || document.msFullscreenEnabled) {
        const element = document.querySelector('.animation-player__frames');
        // requestFullscreen is used to display an element in full screen mode.
        if ('requestFullscreen' in element) {
          element.requestFullscreen();
        } else if ('webkitRequestFullscreen' in element) {
          element.webkitRequestFullscreen();
        } else if ('mozRequestFullScreen' in element) {
          element.mozRequestFullScreen();
        } else if ('msRequestFullscreen' in element) {
          element.msRequestFullscreen();
        }
      }
    }
  }

  fullScreen();

  function screenChange() {
    // fullscreenElement is assigned to html element if any element is in full screen mode.
    if (!(document.fullscreenElement
      || document.webkitFullscreenElement
      || document.mozFullScreenElement
      || document.msFullscreenElement)) {
      // exitFullscreen us used to exit full screen manually
      if ('exitFullscreen' in document) {
        document.exitFullscreen();
      } else if ('webkitExitFullscreen' in document) {
        document.webkitExitFullscreen();
      } else if ('mozCancelFullScreen' in document) {
        document.mozCancelFullScreen();
      } else if ('msExitFullscreen' in document) {
        document.msExitFullscreen();
      }
    }
  }

  // called when an event goes full screen and vice-versa.
  document.addEventListener('fullscreenchange', screenChange);
  document.addEventListener('webkitfullscreenchange', screenChange);
  document.addEventListener('mozfullscreenchange', screenChange);
  document.addEventListener('MSFullscreenChange', screenChange);
}
