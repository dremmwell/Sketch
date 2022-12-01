function makeGrid(size){
    const container = document.querySelector('#container');
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
}

function paintBlack(){
    const cells = document.querySelectorAll("#cell");
    cells.forEach((cell) => {
        cell.addEventListener("mousedown", function () {
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

function paintRandomColor(){
    const cells = document.querySelectorAll("#cell");
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

function setBlackColor(div){
    div.style.backgroundColor = 'black'; 
}

function getRandomNumber (maxNum){
    return Math.floor(Math.random() * maxNum);
};

function getRandomColor(){
    const h = getRandomNumber(360);
    const s = getRandomNumber(100);
    const l = getRandomNumber(100);
    return `hsl(${h}deg, ${s}%, ${l}%)`;
};

function setRandomColor(div){
    const randomColor = getRandomColor();
    div.style.backgroundColor = randomColor;
}

makeGrid(100);
paintBlack(); 
paintRandomColor();  