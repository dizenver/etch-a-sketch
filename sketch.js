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
const gridSelectionTitle = document.createElement('div');
gridSelectionTitle.classList.add('densityTitle');
gridSelectionTitle.textContent = "Density";
leftControls.appendChild(gridSelectionTitle);


const gridSelection = document.createElement('output');
gridSelection.setAttribute('id','sliderValue');
gridSelection.textContent = 16;
leftControls.appendChild(gridSelection);

const gridSlider = document.createElement('input');
gridSlider.classList.add('gridSlider');
gridSlider.setAttribute('type', 'range');
gridSlider.setAttribute('min', '1');
gridSlider.setAttribute('max', '100');
gridSlider.setAttribute('value', '20');
gridSlider.setAttribute('id', 'slider');
gridSlider.setAttribute('onchange', 'sliderValue.value=value');
leftControls.appendChild(gridSlider);


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

/*Create Grid */
makeGrid(length);  


/* Generate Random Color */
function blockBg () {
    const x=Math.round(0xffffff * Math.random()).toString(16);
    const y=(6-x.length);
    const z= "000000";
    const z1 = z.substring(0,y);
    const color = "#" + z1 + x;
    return color; 
}

/* Call Random Color */
function hoverColor($event) {
    let block = $event.target;
    block.style.backgroundColor = `${blockBg()}`;
}

const clearBtn = document.createElement("button");
clearBtn.classList.add("clearButton");
clearBtn.textContent = "CLEAR";
centerControls.appendChild(clearBtn);

const colorRadioContainer = document.createElement("div");
colorRadioContainer.classList.add('colorRadioContainer');

const colorRadioOption = document.createElement("input");
colorRadioOption.setAttribute('type', 'radio');
colorRadioOption.setAttribute('id', 'color-radio');
colorRadioOption.setAttribute('name', 'etchasketchRadio');
colorRadioOption.setAttribute('value', 'color');
colorRadioContainer.appendChild(colorRadioOption);
const colorRadioLabel = document.createElement("label");
colorRadioLabel.setAttribute('for', 'color-radio');
colorRadioLabel.textContent ="Color";
colorRadioContainer.appendChild(colorRadioLabel);


const blackRadioOption = document.createElement("input");
blackRadioOption.setAttribute('type', 'radio');
blackRadioOption.setAttribute('id', 'black-radio');
blackRadioOption.setAttribute('name', 'etchasketchRadio');
blackRadioOption.setAttribute('value', 'black');
colorRadioContainer.appendChild(blackRadioOption);
const blackRadioLabel = document.createElement("label");
blackRadioLabel.setAttribute('for', 'black-radio');
blackRadioLabel.textContent = "Black";
colorRadioContainer.appendChild(blackRadioLabel);

rightControls.appendChild(colorRadioContainer)