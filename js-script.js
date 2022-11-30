

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
            cell.textContent = `${j+1}-${j+1}`;
            row.appendChild(cell);
        }
    } 
}

function changeToBlackBackground(div){
    div.className = "black_bakground";
}

makeGrid(10);

const cells = document.querySelectorAll("#cell");
cells.forEach((cell) => {
    cell.addEventListener("click", function () {
        console.log("clicked on cell")
    }, false);
}) ;


 