const etchasketch = document.createElement('div');
etchasketch.classList.add('sketchContainer');
etchasketch.setAttribute('id', 'etchasketch');
document.body.appendChild(etchasketch);

/* grid size slider */
const gridSlider = document.createElement('input');
gridSlider.classList.add('gridSlider');
gridSlider.setAttribute('type', 'range');
gridSlider.setAttribute('min', '1');
gridSlider.setAttribute('max', '100');
gridSlider.setAttribute('value', '20');
gridSlider.setAttribute('id', 'slider');
gridSlider.setAttribute('onchange', 'sliderValue.value=value');
document.body.appendChild(gridSlider);

const gridSelection = document.createElement('output');
gridSelection.setAttribute('id','sliderValue');
gridSelection.textContent = 16;
document.body.appendChild(gridSelection);


let length = 16;


/*Watch Slider for Changes w/ Event Listener */
const watchSlider = document.querySelector('.gridSlider');
watchSlider.addEventListener('change', (event) => {
    let length = document.getElementById("sliderValue").value;
    let oldBlocks = document.getElementById("etchasketch");
        while (oldBlocks.firstChild) {
        oldBlocks.removeChild(oldBlocks.firstChild);
        }
    makeGrid(length);  
  });

/* Create Row with of length */
function firstRow(length) {
    const rowLength = document.createElement('div');
    rowLength.classList.add('gridRow');
    rowLength.setAttribute('id','rowLength');
    etchasketch.appendChild(rowLength);

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

