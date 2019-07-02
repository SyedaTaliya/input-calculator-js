


function calculation() {

    let x = parseInt(document.querySelector("#first-num").value);

    let y = parseInt(document.querySelector("#second-num").value);

    let z = document.querySelector("#operators").value;

    let sum;




    if (z == "add") {
        sum = x + y;
    }

    else if (z == "subtract") {
        sum = x - y;
    }

    else if (z == "multiplication") {
        sum = x * y;
    }

    else if (z == "division") {
        sum = x / y;
    }

    document.querySelector("#ans").innerHTML = sum;
}




