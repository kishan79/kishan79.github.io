function collectJSON()
{

    var xmlhttp = new XMLHttpRequest();
    var url = "http://api.fixer.io/latest?base=";
    var d = document.getElementById('val').value;
    var k = document.getElementById('curr').value;
         if(k=="NA")
            return;
    url += k;
    xmlhttp.open("GET", url, false);
    xmlhttp.send();
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200)
     {
     var result = JSON.parse(xmlhttp.responseText);
     var j = document.getElementById('cur').value;
         if(j=="NA")
             return;
     document.getElementById("show").innerHTML = (result.rates[j])*d;
     }
    
}
    
