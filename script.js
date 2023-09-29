"use strict";

// Project Added
const numberOfProject = document.querySelectorAll("#projectList li").length;
// console.log("Number of <li> elements:", numberOfProject);

const projectAdded = document.querySelector("#projectAdded");

projectAdded.textContent = numberOfProject;

// END
