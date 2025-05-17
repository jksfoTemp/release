const searchEng = "https://www.startpage.com/sp/search?query=";

document.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    var foo = document.getElementById("myInput").value;
    var cleanerString = foo.replace(/ /g, "&nbsp;");
    document.getElementById("mirrorText").textContent =
      searchEng + cleanerString;
    document.location = searchEng + foo;
  }
});

function updateClock() {
  const now = new Date();
  const myTime = now.toLocaleTimeString("en-US", { hour12: false });
  const myDate = now.toLocaleDateString("en-US");
  document.getElementById("dMyTime").textContent = myTime;
  document.getElementById("dMyDate").textContent = myDate; // yes, I could comment this out ;
}

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
updateClock();
setInterval(updateClock(), 1000);

function myInit() {
  document.getElementById("myInput").focus();
  /* https://stackoverflow.com/questions/7179535/set-window-to-fullscreen-real-fullscreen-f11-functionality-by-javascript */
  fullScreen(document.body);
}
