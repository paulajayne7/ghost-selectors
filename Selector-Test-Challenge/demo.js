/************
 * N.B. The ghosts are SVGs, so it's 'fill', not 'color' you need to change
 *************/

// GET BY ID
document.getElementById("first_ghost").style.fill = "orange";

// GET BY CLASSNAME
const secondWave = document.getElementsByClassName("second_wave");
secondWave[0].style.fill = "blue";

for (let i = 0; i < secondWave.length; i++) {
  secondWave[i].style.fill = "blue";
}

// GET AREA, DRILL DOWN using GET BY TAG NAME

const area51 = document.getElementById("area-51");
const ghosts51 = area51.getElementsByTagName("svg");
for (const ghosts of ghosts51) {
  ghosts.style.fill = "green";
}

// querySelector nth-child

const middleGhost = document.querySelector("#area-51 svg:nth-last-child(2)");
middleGhost.style.stroke = "red";
middleGhost.style.strokeWidth = "15px";

// from the last child, select the div immediately above the ghost and make its border '5px dashed'

middleGhost.closest("div").style.border = "5px dashed";

// querySelectorAll
const area50 = document.querySelectorAll("#area-50 svg");

for (const ghost of area50) {
  ghost.style.fill = "red";
}
