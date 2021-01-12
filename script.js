//1.create a request variable
var request = new XMLHttpRequest();
//2.create a connection
request.open('GET','https://restcountries.eu/rest/v2/all',true);
//3. send tht connection
request.send();
//4. register a event listener. once tht data is ready,load the data
request.onload = function (){
    let countrydata = JSON.parse(this.response);
    //console.log(countrydata);
    for(var i in countrydata)
    console.log(countrydata[i].flag);
}
