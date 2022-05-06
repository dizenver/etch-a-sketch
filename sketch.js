const etchasketch = document.createElement('div');
etchasketch.classList.add('etchasketch');
etchasketch.setAttribute('id', 'etchasketch');
document.body.appendChild(etchasketch);


const etchTitle = document.createElement('div');
etchTitle.classList.add('etchTitle');
etchTitle.setAttribute('id', 'etchTitle');
etchTitle.textContent = "Etch A Sketch";
etchasketch.appendChild(etchTitle);


const drawingGrid = document.createElement('div');
drawingGrid.classList.add('drawingContainer');
drawingGrid.setAttribute('id', 'drawingGrid');
etchasketch.appendChild(drawingGrid);

/*Controls Divs*/
const controls = document.createElement('div');
controls.classList.add("controlDiv");

const leftControls = document.createElement('div');
leftControls.setAttribute("id","left");

const centerControls = document.createElement('div');
centerControls.setAttribute("id","center");

const rightControls = document.createElement('div');
rightControls.setAttribute("id","right");


etchasketch.appendChild(controls);
controls.appendChild(leftControls);
controls.appendChild(centerControls);
controls.appendChild(rightControls);

/* grid size slider */
const sliderContainer = document.createElement('div');
sliderContainer.classList.add('sliderContainer');



const gridSelection = document.createElement('output');
gridSelection.setAttribute('id','sliderValue');
gridSelection.textContent = 16;
sliderContainer.appendChild(gridSelection);

const gridSlider = document.createElement('input');
gridSlider.classList.add('gridSlider');
gridSlider.setAttribute('type', 'range');
gridSlider.setAttribute('min', '16');
gridSlider.setAttribute('max', '100');
gridSlider.setAttribute('value', '20');
gridSlider.setAttribute('id', 'slider');
gridSlider.setAttribute('onchange', 'sliderValue.value=value');
sliderContainer.appendChild(gridSlider);

const gridSelectionTitle = document.createElement('div');
gridSelectionTitle.classList.add('densityTitle');
gridSelectionTitle.textContent = "Density";
sliderContainer.appendChild(gridSelectionTitle);

leftControls.appendChild(sliderContainer);


let length = 16;


/*Watch Slider for Changes w/ Event Listener */
const watchSlider = document.querySelector('.gridSlider');
watchSlider.addEventListener('change', (event) => {
    let length = document.getElementById("sliderValue").value;

    /*Clear old divs */
    let oldBlocks = document.getElementById("drawingGrid");
        while (oldBlocks.firstChild) {
        oldBlocks.removeChild(oldBlocks.firstChild);
        }
    /*Make new divs */
    makeGrid(length);  
  });

/* Create Row with of length */
function firstRow(length) {
    const rowLength = document.createElement('div');
    rowLength.classList.add('gridRow');
    rowLength.setAttribute('id','rowLength');
    drawingGrid.appendChild(rowLength);

    for (let i = 1; i <= length; i++) {
        const gridBlock = document.createElement('div');
        gridBlock.addEventListener('mouseover', hoverColor);
        gridBlock.classList.add('gridBlock');
        rowLength.appendChild(gridBlock);
    }

}
/* Repeat row 'length' times to create grid*/
function makeGrid(length) {

    for (let i = 1; i <= length; i++) {
         firstRow(length);
    }
}


/* Clear button */


const clearBtn = document.createElement("button");
clearBtn.classList.add("clearButton");
clearBtn.textContent = "CLEAR";
centerControls.appendChild(clearBtn);


/* Add Clear Button Functionality */
const watchClear = document.querySelector('.clearButton');
watchClear.addEventListener('click', (event) => {
    let length = document.getElementById("sliderValue").value;

    /*Clear old divs */
    let oldBlocks = document.getElementById("drawingGrid");
        while (oldBlocks.firstChild) {
        oldBlocks.removeChild(oldBlocks.firstChild);
        }
    /*Make new divs */
    makeGrid(length);  
  });


/* Color Select Section - Right Control */
const colorSelectContainer = document.createElement("div");
colorSelectContainer.classList.add('colorSelectContainer');

const colorSelect = document.createElement("input");
colorSelect.setAttribute('type', 'checkbox');
colorSelect.setAttribute('id', 'switch');
let selectDrawing = document.querySelector(".drawingContainer");
selectDrawing.parentNode.insertBefore(colorSelect, selectDrawing.nextSibling);

const switchColor = document.createElement("label");
switchColor.classList.add('switchColor');
switchColor.setAttribute('for', 'switch');
colorSelectContainer.appendChild(switchColor);

const toggleDiv = document.createElement("div");
toggleDiv.classList.add('toggleDiv');
switchColor.appendChild(toggleDiv);

const colorName = document.createElement("div");
colorName.classList.add('colorName');
switchColor.appendChild(colorName);

const originalColor = document.createElement("p");
originalColor.classList.add('originalColor');
originalColor.textContent = "Original";
colorName.appendChild(originalColor);
const psyColor = document.createElement("p");
psyColor.classList.add('psyColor');
psyColor.textContent = "Psychedelic";
colorName.appendChild(psyColor);

rightControls.appendChild(colorSelectContainer);


/* Generate Random Color */
function blockPsychedelic () {
            const x=Math.round(0xffffff * Math.random()).toString(16);
            const y=(6-x.length);
            const z= "000000";
            const z1 = z.substring(0,y);
            const color = "#" + z1 + x;
            console.log("psych");
            return color; 
}

function blockOriginal () {
    const color = "#222";
    console.log("original");
    return color; 
}

const colorSwitch = document.querySelector("#switch");
colorSwitch.addEventListener('change', colorChoice);

function colorChoice() {
    if (document.getElementById('switch').checked) {
        return blockPsychedelic();
    } else {
        return blockOriginal();
    }

}

function hoverColor($event) {
        let block = $event.target;
        block.style.backgroundColor = `${colorChoice()}`;
}


const footer = document.createElement("div");
footer.classList.add('footer');
footer.innerHTML = "<a href = 'https://github.com/dizenver/etch-a-sketch'><i class='fab fa-github fa-2x' aria-hidden='true'></i><div>Built by dizenver </div></a>";
document.body.appendChild(footer);


/*Create Grid */
makeGrid(length); 