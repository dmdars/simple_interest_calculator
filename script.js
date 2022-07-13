function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal*years*rate/100;
    var year = new Date().getFullYear() + parseInt(years)
    if (principal <= 0){
        alert("Enter a positive number")
        document.getElementById("principal").focus();
    }
    else{
        document.getElementById("result").innerHTML="\<br\>If you deposit \<font style ='color:black; background-color:yellow;'>"+principal+",\</font>\<br\>at an interest rate of \<font style ='color:black; background-color:yellow;'>"+rate+"%,\</font>\<br\>You will receive an amount of \<font style='color:black; background-color:yellow'>"+interest+",\</font>\<br\>in the year \<font style = 'color:black; background-color:yellow'>"+year+"\</font>\<br\>";
    }
}

function updateRate(){
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateval+"%";
}


