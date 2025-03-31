function createTable() {
    const tableContainer = document.getElementById('tableContainer');
    let rows = document.getElementById('rows').value;
    let columns = document.getElementById('columns').value;
    
    tableContainer.innerHTML = ' ';

    const table = document.createElement('table');

    for (let r = 1; r <= rows; r++) {
        const tr = document.createElement('tr');
        for (let c = 1; c <= columns; c++) {
            const td = document.createElement('td');
            td.textContent = `row no.: ${r}, col no.: ${c}`;
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
    tableContainer.appendChild(table);
}

window.addEventListener('load', createTable);