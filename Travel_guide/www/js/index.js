
function flight_info(){
    unirest.get("https://forteweb-airportguide-airport-basic-info-v1.p.rapidapi.com/get_airport?airport_id=KLAX")
    .header("X-RapidAPI-Host", "forteweb-airportguide-airport-basic-info-v1.p.rapidapi.com")
    .header("X-RapidAPI-Key", "b90d14fcd0msh89be01094cab7fap14e6a0jsn783bb007bd9a")
    .end(function (result) {
      console.log(result.status, result.headers, result.body);
    });
}

function logout() {
    window.localStorage.setItem('user','#');
}


var log_status = window.localStorage.getItem('user')
//alert(log_status);
if(log_status == '#')
    {
        document.getElementById("log_status").innerHTML="<a class=\"nav-link\" href=\"login.html\">Log in</a>";
        document.getElementById("log_status_home").innerHTML="<a href=\"index.html\" aria-expanded=\"false\">Home</a>"
    }
else {
    document.getElementById("log_status").innerHTML="<a onclick=\"logout()\" class=\"nav-link\" href=\"index.html\">Log out</a>";
    document.getElementById("log_status_home").innerHTML="<a href=\"user_home.html\" aria-expanded=\"false\">Home</a>"
}
