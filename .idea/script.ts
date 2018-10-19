function multiplication_tab() {
    let row = "";
    for (let index = 1; index <= 10; index++) {
        for (let jndex = 1; jndex <= 10; jndex++) {
            row = row + (index * jndex) + " ";
        }
        console.log(row);
        row = "";
    }
}
multiplication_tab();