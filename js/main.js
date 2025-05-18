const searchEng = "https://www.startpage.com/sp/search?query=";

// <!-- Thank you - full screen! -->
// <!-- Thank you - full screen! -->
// ## https://stackoverflow.com/questions/7495373/how-to-make-browser-full-screen-using-f11-key-event-through-javascript
function fullScreen(elem) {
  /* uncomment the below after happy with dev 
      // ## The below if statement seems to work better ## if ((document.fullScreenElement && document.fullScreenElement !== null) || (document.msfullscreenElement && document.msfullscreenElement !== null) || (!document.mozFullScreen && !document.webkitIsFullScreen)) {
      if ((document.fullScreenElement !== undefined && document.fullScreenElement === null) || (document.msFullscreenElement !== undefined && document.msFullscreenElement === null) || (document.mozFullScreen !== undefined && !document.mozFullScreen) || (document.webkitIsFullScreen !== undefined && !document.webkitIsFullScreen)) {
          if (elem.requestFullScreen) {
              elem.requestFullScreen();
          } else if (elem.mozRequestFullScreen) {
              elem.mozRequestFullScreen();
          } else if (elem.webkitRequestFullScreen) {
              elem.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
          } else if (elem.msRequestFullscreen) {
              elem.msRequestFullscreen();
          }
      } else {
          if (document.cancelFullScreen) {
              document.cancelFullScreen();
          } else if (document.mozCancelFullScreen) {
              document.mozCancelFullScreen();
          } else if (document.webkitCancelFullScreen) {
              document.webkitCancelFullScreen();
          } else if (document.msExitFullscreen) {
              document.msExitFullscreen();
          }
      }
  */
}

fullScreen(document.body);
