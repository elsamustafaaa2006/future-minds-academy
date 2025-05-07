const mlt = document.querySelector('#mlt');

function createTable(row, col) {
    let buildTable = '';
    for (let i = 1; i <= row; i++) {
        if (i == 1) {
            buildTable += '<tr style="background-color: green">';
            for (let j = 1; j <= col; j++) {
                buildTable += '<td>'
                buildTable += i * j;
                buildTable += '</td>';
            }
            buildTable += '</tr>';
        }
        else {
            buildTable += '<tr>';
            for (let j = 1; j <= col; j++) {
                if (j == 1) {
                    buildTable += '<td style="background-color: yellow;">'
                    buildTable += i * j;
                    buildTable += '</td>';
                }
                else {
                    buildTable += '<td>'
                        buildTable += i * j;
                    buildTable += '</td>';
                }

            }
            buildTable += '</tr>';
        }

    }
    mlt.innerHTML = buildTable;
}
