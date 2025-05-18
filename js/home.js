/* 

I didn't want to deal with MIME types, so I just used a script tag to load the js inline. 
Not sure if I have access to htaccess files on the hosting service.

alert("hi");

const searchEng = "https://www.startpage.com/sp/search?query=";


function myInit() {
  document.getElementById("myInput").focus();
}

function updateClock() {
  const now = new Date();
  const myTime = now.toLocaleTimeString("en-US", { hour12: false });
  const myDate = now.toLocaleDateString("en-US");
  document.getElementById("dMyTime").textContent = myTime;
  document.getElementById("dMyDate").textContent = myDate; // yes, I could comment this out ;
}

document.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    var foo = document.getElementById("myInput").value;
    var cleanerString = foo.replace(/ /g, "&nbsp;");
    document.getElementById("mirrorText").textContent =
      searchEng + cleanerString;
    document.location = searchEng + foo;
  }
});

myInit();
updateClock();
setInterval(updateClock(), 1000);
*/
