function compute()
{
    var principal=document.getElementById("principal").value;
    if(principal<=0)
    {
        alert("Enter a positive number");
        return false;
    }
    var rate=document.getElementById("rate").value;
    var years=document.getElementById("years").value;
    var interest= (principal*years*rate)/100;
    var amount=parseInt(principal)+interest;
    var year = new Date().getFullYear()+parseInt(years);  
    document.getElementById("result").innerHTML="If you deposit "+principal+",\<br\>at an interest rate of "+rate+"%\<br\>You will receive an amount of "+amount+",\<br\>in the year "+year+"\<br\>"
}

function updateRate() 
{
    var ratevalue= document.getElementById("rate");
    var output = document.getElementById("rated");
    output.innerHTML=ratevalue.value;
    ratevalue.onchange=function(){
        output.innerHTML=this.value;
    }
}
function validatep()
{
    var principal_v=document.myform.principal.value;
    if(principal_v<=0)
    {
        alert("Principal cannot be negative or zero");
        return false;
    }
}
