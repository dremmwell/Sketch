

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

function changeToBlackBackground(div){
    div.className = "black_background";
}

makeGrid(100);

const cells = document.querySelectorAll("#cell");
cells.forEach((cell) => {
    cell.addEventListener("mousedown", function () {
        changeToBlackBackground(cell);
    }, false);
    cell.addEventListener("mouseover", function (e) {
        if(e.buttons == 1) {
            changeToBlackBackground(cell)
        };
    }, false);
}) ;

/* cells.forEach((cell) => {
    cell.addEventListener("mouseover", function (e) {
        if(e.buttons == 1) {
            changeToBlackBackground(cell)
        };
    }, false);
});  
 */ 
  