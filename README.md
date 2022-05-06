# Etch A Sketch 
This is a project created while following The Odin Project 
Create an etch a sketch using **DOM Manipulation**

### Functionality Goals
The etch a sketch must include:
1. A way to adjust the amount of blocks on your grid
2. A way to clear your grid
3. A way to change between colors

### My Thoughts
Overall, I found the hardest part to be the changing between color options.  I tried a few different ways where it was changing all the previous blocks to the color option you select, which I did not want. Others where it just flat broke the mousover function, but thankfully I was able to finally get it to work.

### Future Improvements
- I only have 2 color options currently and would like to add more:
	-  color picker.
	- color themes even. (warm, cold, earthy, dark)
- I would like to try and make circlar sliders/toggles to make it look more like an etch a sketch


## Project Elements
Here is the Main sections of the project:

### Grid Creation
Making initial row `div` and then repeating the same length to remain square
```js
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
```

Call function to make grid
```js
/*Create Grid */
makeGrid(length);
```


### Grid Density
Slider Control
```js
/*Select slide and add event listener to watch for change*/
const watchSlider = document.querySelector('.gridSlider');
watchSlider.addEventListener('change', (event) => {
let length = document.getElementById("sliderValue").value;

  

/*When change is detected, clear old divs */

let oldBlocks = document.getElementById("drawingGrid");
while (oldBlocks.firstChild) {
	oldBlocks.removeChild(oldBlocks.firstChild);
}

/*Make new divs with new slider value */
makeGrid(length);
});

```

### Color Toggle
Color Select
```js
/* Hover color function is called whenever the mouseover event is triggered within the grid. The even listener is added when the grid is created above*/
function hoverColor($event) {
	let block = $event.target;
	block.style.backgroundColor = `${colorChoice()}`;
}

/*Select and add Event Listener to Color Switch */
const colorSwitch = document.querySelector("#switch");
colorSwitch.addEventListener('change', colorChoice);

/* Color choice is called by the hover color function below and colors grid based on the state of the switch above */
function colorChoice() {
	if (document.getElementById('switch').checked) {
		return blockPsychedelic();
	} else {
		return blockOriginal();
	}
}

/* The functions below are used to create the colors for the colorChoice function above. */

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

/* Gray Colors */
function blockOriginal () {
	const color = "#222";
	console.log("original");
	return color;
}

```


### Clear Grid
Clear Button
```js
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
```
