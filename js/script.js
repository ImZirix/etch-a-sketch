// Declaring the default variables
const GRIDSIDE = 350;
let squaresPerSide = 16

// Retrieving the HTML elements
const sketchAreaEl = document.getElementById("sketchArea");
const sliderContainerEl = document.getElementById("sliderContainer");
const sliderEl = document.getElementById("slider");
const sliderValueEl = document.getElementById("sliderValue");

// Update the display text to show the current slider value and its corresponding resolution
sliderValueEl.textContent = `${slider.value} x ${slider.value} (Resolution)`;

// Set the the width and height for the sketchArea
sketchAreaEl.style.width = sketchAreaEl.style.height = `${GRIDSIDE}px`;

// Crearing a function to change the background color for the cells
function setBackgroundColor() {
    this.style.backgroundColor = "black";
}

// Creating a function to make cells inside of sketchArea
function createCells(squaresPerSide) {
    const numOfSquares = (squaresPerSide * squaresPerSide);
    const widthOrHeight = `${(GRIDSIDE / squaresPerSide) - 2}px`;

    for(let i = 0; i < numOfSquares; i++) {
        const cell = document.createElement("div");

        cell.style.width = cell.style.height = widthOrHeight;

        cell.classList.add("cell");

        sketchAreaEl.appendChild(cell)
        // Adding an event listener to every cell to change the background color
        cell.addEventListener("mouseover", setBackgroundColor);
    }
}

// Creating a function to remove sketchArea childs
function removeCell() {
    while(sketchAreaEl.firstChild) {
        sketchAreaEl.removeChild(sketchAreaEl.firstChild);
    }
}

// Update the displayed resolution based on the slider value, remove existing cells, 
// and create new cells corresponding to the current slider value.
sliderEl.oninput = function() {
    let txt = `${this.value} x ${this.value} (Resolution)`;
    sliderValueEl.innerHTML = txt;
    removeCell();
    createCells(this.value);
}
// creates the default grid 16x16
createCells(16)