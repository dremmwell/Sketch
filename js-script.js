
function getRandomNumber (maxNum){
    return Math.floor(Math.random() * maxNum);
}

function getRandomColor(){
    const h = getRandomNumber(360);
    const s = getRandomNumber(100);
    const l = getRandomNumber(100);
    return `hsl(${h}deg, ${s}%, ${l}%)`;
};

///////////////////////// Handle Grid ////////////////////////////////

let defaultSize = 50;
makeGrid(defaultSize);
var gridSliderText = document.querySelector('.grid-slider-text');
gridSliderText.textContent = `New Page : ${defaultSize} x ${defaultSize} px`;

function makeGrid(size){
    const container = document.querySelector('.container');
    for (let i=0; i < size; i++){
        const row = document.createElement('div');  
        row.classList.add('row');
        row.id = "row";
        // row.textContent = `row ${i+1}`;
        container.appendChild(row);   

        for(let j=0; j< size; j++){
            const cell = document.createElement('div');
            cell.classList.add('cell');
            cell.id = "cell";
            // cell.textContent = `${i+1}-${j+1}`;
            row.appendChild(cell);  
        }  
    } 
    const grid_button = document.querySelector("#grid-button");
    grid_button.checked = true;
}

function deleteGrid() {
    const container = document.querySelector(".container");
    const rows = document.querySelectorAll(".row");
        rows.forEach((row) => {
            container.removeChild(row);
       }); 
}    

var gridSlider = document.querySelector("#grid-slider");
gridSlider.onchange = function() {
    gridSliderText.textContent = `New Page : ${this.value} x ${this.value} px`;
    deleteGrid();
    makeGrid(this.value);
    resetRadioButtons();
}    

/////////////////// Reset Buttons ///////////////////////

function resetRadioButtons(){
    const black_button = document.querySelector("#black-button");
    black_button.checked = false;
    const random_button = document.querySelector("#random-button");
    random_button.checked = false;
    const erase_button = document.querySelector("#erase-button");
    erase_button.checked = false;
}
  
//////////////////// Set Colors /////////////////////////
     
function setBlackColor(div){
    div.style.backgroundColor = 'black'; 
}     
 
function setRandomColor(div){
    const randomColor = getRandomColor();  
    div.style.backgroundColor = randomColor;  
}  

function setWhiteColor(div) {
    div.style.backgroundColor = 'white';
}

///////////////////// Paint Functions ////////////////////////

function paintBlack(){
    if(black_button.checked){
        const cells = document.querySelectorAll(".cell");
        cells.forEach((cell) => {
            cell.addEventListener("mousedown", function (e) {
                e.preventDefault();
                setBlackColor(cell);
            }, false);
            cell.addEventListener("mouseover", function (e) {
                e.preventDefault();
                if(e.buttons == 1) {
                setBlackColor(cell);
                };
            }, false); 
        }) ; 
    }
    else{
        return;
    }
}

function paintRandomColor(){
    const cells = document.querySelectorAll(".cell");
    cells.forEach((cell) => {
        cell.addEventListener("mousedown", function (e) {
            e.preventDefault();
            setRandomColor(cell);
        }, false);
        cell.addEventListener("mouseover", function (e) {
            e.preventDefault();
            if(e.buttons == 1) {
            setRandomColor(cell);
            };
        }, false); 
    }) ; 
}

function paintWhite(){
    const cells = document.querySelectorAll(".cell");
    cells.forEach((cell) => {
        cell.addEventListener("mousedown", function (e) {
            e.preventDefault();
            setWhiteColor(cell);
        }, false);
        cell.addEventListener("mouseover", function (e) {
            e.preventDefault();
            if(e.buttons == 1) { 
            setWhiteColor(cell);
            };
        }, false); 
    }) ;  
}

function paintGridWhite(){
    const cells = document.querySelectorAll(".cell");
    cells.forEach((cell) => {
        cell.style.backgroundColor = 'white';
        }); 
};

function gridOn(){
    const cells = document.querySelectorAll(".cell");
    cells.forEach((cell) => {
        cell.style.border = 'thin solid lightgrey';
        }); 
};  
  
function gridOff(){
    const cells = document.querySelectorAll(".cell");
    cells.forEach((cell) => {
        cell.style.border = 'none';
        }); 
}; 
///////////////////////// Events //////////////////////////////////

const black_button = document.querySelector("#black-button");
black_button.addEventListener("click", function () {
    paintBlack();
});

const random_button = document.querySelector("#random-button");
random_button.addEventListener("click", function () {
    paintRandomColor();
});

const erase_button = document.querySelector("#erase-button");
erase_button.addEventListener("click", function () {
    paintWhite();
});

const reset_button = document.querySelector("#reset-button");
reset_button.addEventListener("click", function () {
    paintGridWhite();
});     

const grid_button = document.querySelector("#grid-button");
grid_button.addEventListener("click", function () {
    if(grid_button.checked){
        gridOn();
    }
    else{
        gridOff();
    }
});


          
