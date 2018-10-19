function multiplication_tab() {
    var row = "";
    for (var index = 1; index <= 10; index++) {
        for (var jndex = 1; jndex <= 10; jndex++) {
            row = row + (index * jndex) + " ";
        }
        console.log(row);
        row = "";
    }
}
multiplication_tab();
