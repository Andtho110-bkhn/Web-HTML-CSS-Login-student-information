function addRow() {
    //xuất giá trị
    var fname = document.getElementById('fullname').value;
    var gen = document.getElementById('gender').value;
    var birth = document.getElementById('birthday').value;
    var note = document.getElementById('note').value;

    //get the html table
    //the first table = 0
    var table = document.getElementsByTagName('table')[0];

    //add new empty row to the table
    //in the top = 0
    //table.rows.length = the end
    //table.rows.length/2+1 = the center
    var newRow = table.insertRow(table.rows.length);

    //add cells to the row
    var cel1 = newRow.insertCell(0);
    var cel2 = newRow.insertCell(1);
    var cel3 = newRow.insertCell(2);
    var cel4 = newRow.insertCell(3);

    //add values to the cells
    cel1.innerHTML = fname;
    cel2.innerHTML = gen;
    cel3.innerHTML = birth;
    cel4.innerHTML = note;
}
