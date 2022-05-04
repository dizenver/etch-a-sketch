const etchasketch = document.createElement('div');
etchasketch.classList.add('sketchContainer');
document.body.appendChild(etchasketch);


let length = 50;

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

function repeatRows(length) {

    for (let i = 1; i <= length; i++) {
         firstRow(length);
    }
}

repeatRows(length);  

function hoverColor($event) {
    let block = $event.target;
    block.style.backgroundColor = 'blue';
}

