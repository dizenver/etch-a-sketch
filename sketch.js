const etchasketch = document.createElement('div');
etchasketch.classList.add('sketchContainer');
document.body.appendChild(etchasketch);

/* grid size */
let length = 50;

/* Create Row with of length */
function firstRow(length) {
    const rowLength = document.createElement('div');
    rowLength.classList.add('gridRow');
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

