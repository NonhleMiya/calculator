/**Function to clear displayed values*/

function clearScreen(){
    document.getElementById("results").value="";
}

/**Function to display values */

function display(value){
    document.getElementById("results").value +=value;
}

/**Function to evaluate the expressions */
function calculate(){
    var x = document.getElementById("results").value;
    var y = eval(x);
    document.getElementById("results").value = y;
}