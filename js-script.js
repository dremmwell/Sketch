function makeGrid(size){
    const container = document.querySelector('#container');
    for (let i=0; i < size; i++){

        const row = document.createElement('tr');
        row.classList.add('row');
        row.id = "row" + i;
        // row.textContent = `row ${i+1}`;
        container.appendChild(row);

        for(let j=0; j< size; j++){
            const cell = document.createElement('td');
            cell.classList.add('cell');
            cell.id = "cell" + i;
            // cell.textContent = `cell ${i+1}`;
            row.appendChild(cell);
        }
    } 
}

makeGrid(10);