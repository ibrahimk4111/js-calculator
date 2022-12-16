// Printing Number on result section 

function insertNumber(number) {

    // document.querySelector("#result").value = number;
    var preNumber = $("#result").val();

    $("#result").val(preNumber + number)

}

// Clearing Everything on result section 
function clearResult() {
    $("#result").val(' ');
}

// Deleting Numbgers on result section
function deleteNumber() {

    var deletePoint = $("#result").val().slice(0, -1);
    $("#result").val(deletePoint);
}

// Calculating the numbers
function calculate() {
    var mathTerm = eval($("#result").val());
    $("#result").val(mathTerm);
}