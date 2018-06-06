//Constants - size of the grid and time intervals.
const gridX = 4;
const gridY = 4;
const timeInterval = 250;
const timeChange = 2000;

var gridHash = {};
var gridSize = gridX * gridY;

init();

function init() {
  createGridHash();
  createHTMLGrid();
  setInterval(changeGridColors, timeInterval);
}

function createGridHash() {
  for(let gridId=0; gridId<gridSize; gridId++) {
    gridHash[gridId] = {};
    gridHash[gridId]['red'] = null;
    gridHash[gridId]['blue'] = null;
    gridHash[gridId]['color'] = 'red';
  }
}

function createHTMLGrid(){
  for(let gridElemId=0; gridElemId<gridSize; gridElemId++){
    var container = document.getElementsByClassName('container')[0];
    var newDivElem = document.createElement('div');
    container.appendChild(newDivElem);
    newDivElem.setAttribute('id', gridElemId);
    newDivElem.setAttribute('class', 'common');
  }    
}
//Creates a gridArray with the sqaures that are eligible for change.
//Randomly selects one of the grids from the gridArray for change.
//This way every 250ms one valid grids/square changes color.
function changeGridColors() {
  var gridArray = [];
  for(let gridId=0; gridId<gridSize; gridId++) {
    var gridColor = gridHash[gridId]['color'];
    var gridTime = gridHash[gridId][gridColor];
    var timeNow = Date.now();
    var timeDifference = timeNow - gridTime;
    if (timeDifference > timeChange || gridTime == null) {
      gridArray.push(gridId);
    }
  }
  var gridId = gridArray[Math.floor(Math.random() * gridArray.length)];
  var gridElem = document.getElementById(gridId);
  var gridElemColor = gridElem.style.backgroundColor;
  gridColor = gridElemColor == 'red' ? 'blue' : 'red';
  gridElem.style.backgroundColor = gridColor;
  gridHash[gridId][gridColor] = timeNow;      
  gridHash[gridId]['color'] = gridColor;
}
