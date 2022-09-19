function compute() {
    p = document.getElementById("principal").value;
    result();

}

var principal = document.getElementById("principal").value;

var rate = document.getElementById("rate").value;

var years = document.getElementById("years").value;

var interest = principal * years * rate / 100;

var year = new Date().getFullYear() + parseInt(years);

var result = document.getElementById("result").value;

function updateRate() {
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateval;
}



function result() {

    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate / 100;
    var year = new Date().getFullYear() + parseInt(years);
    var ele = document.getElementById("ele");


    if (principal>0)
    {
        document.getElementById("result").innerHTML = "If you deposit " + `<mark>${principal}</mark>` + ",\<br\>at an interest rate of " + `<mark>${rate}</mark>`+ `<mark>%</mark>` + "<br\>You will receive an amount of " + `<mark>${interest}</mark>` + ",\<br\>in the year " + `<mark>${year}</mark>` + "\<br\>";
        ele.style.height="370px";
        return true;
    }
    else if (principal<=0){
        alert("Enter a positive number");
        document.getElementById("principal").focus();
        return false;
    }
}

    

  











