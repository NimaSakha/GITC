const about = document.querySelector(".about");
const impact = document.querySelector(".impact");
const mission = document.querySelector(".mission");

function show(i) {
  about.style.display = "none";
  impact.style.display = "none";
  mission.style.display = "none";
  i.style.display = "flex";
}
function hide() {
  about.style.display = "none";
  impact.style.display = "none";
  mission.style.display = "none";
}
