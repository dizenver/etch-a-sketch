const etchasketch = document.createElement('div');
etchasketch.classList.add('sketchContainer');
document.body.appendChild(etchasketch);


let length = 20;

function firstRow(length) {
    const rowLength = document.createElement('div');
    rowLength.classList.add('gridRow');
    etchasketch.appendChild(rowLength);

    for (let i = 1; i <= length; i++) {
        const gridBlock = document.createElement('div');
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


