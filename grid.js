//Constants - size of the grid and time intervals.
const gridX = 4;
const gridY = 4;
const timeInterval = 250;
const timeChange = 2000;

var gridHash = {};
var gridSize = gridX * gridY;
var gridColor = 'red';

createGridHash();
createHTMLGrid();
setInterval(changeGridColors, timeInterval);

function createGridHash() {
    for(let gridId=0; gridId<gridSize; gridId++) {
        gridHash[gridId] = {};
        gridHash[gridId]['red'] = null;
        gridHash[gridId]['blue'] = null;
    }
    console.log('gridHash: ', gridHash);
}

function createHTMLGrid(){
  for(let gridElemId=0; gridElemId<gridSize; gridElemId++){
      var container = document.getElementsByClassName('container')[0];
      console.log(container)
      var newDivElem = document.createElement('div');
      console.log(newDivElem);
      container.appendChild(newDivElem);
      newDivElem.setAttribute('id', gridElemId);
      newDivElem.setAttribute('class', 'common');
  }    
}

function changeGridColors() {
    var gridId = Math.floor(Math.random() * gridSize);
    var gridTime = gridHash[gridId][gridColor];
    var timeNow = Date.now();
    var timeDifference = timeNow - gridTime;
    if (timeDifference > timeChange || gridTime == null) {
      var gridElem = document.getElementById(gridId);
      gridElem.style.backgroundColor = gridColor;
      gridColor = gridColor == 'red' ? 'blue' : 'red';
      gridHash[gridId][gridColor] = timeNow;      
    } 
}