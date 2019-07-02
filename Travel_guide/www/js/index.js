
function flight_info(){
    unirest.get("https://forteweb-airportguide-airport-basic-info-v1.p.rapidapi.com/get_airport?airport_id=KLAX")
    .header("X-RapidAPI-Host", "forteweb-airportguide-airport-basic-info-v1.p.rapidapi.com")
    .header("X-RapidAPI-Key", "b90d14fcd0msh89be01094cab7fap14e6a0jsn783bb007bd9a")
    .end(function (result) {
      console.log(result.status, result.headers, result.body);
    });
}

function user_logout() {
    window.localStorage.setItem('user','#');
    window.localStorage.setItem('loc','#');
}

function place_logout() {
    window.localStorage.setItem('place','#');
    window.localStorage.setItem('loc','#');
}


var user_log_status = window.localStorage.getItem('user');
var place_log_status = window.localStorage.getItem('place');
//alert(log_status);
if(user_log_status == '#' && place_log_status=='#')
    {
        document.getElementById("log_status").innerHTML="<a class=\"nav-link\" href=\"login.html\">Log in</a>";

        document.getElementById("log_status_home").innerHTML="<a href=\"index.html\" aria-expanded=\"false\">Home</a>"
    }
else if(user_log_status != '#'){
    document.getElementById("log_status").innerHTML="<a onclick=\"user_logout()\" class=\"nav-link\" href=\"index.html\">Log out</a>";
    document.getElementById("log_status_home").innerHTML="<a href=\"user_home.html\" aria-expanded=\"false\">Home</a>";
    document.getElementById("log_status_options").innerHTML="<li><a href=\"user_profile.html\">Profile</a></li><li><a href=\"user_plan_trip.html\">Plan a trip</a></li><li><a href=\"user_trip.html\">Your trips</a></li>"

}
else {
    document.getElementById("log_status").innerHTML="<a onclick=\"place_logout()\" class=\"nav-link\" href=\"index.html\">Log out</a>";
    document.getElementById("log_status_home").innerHTML="<a href=\"SP_home.html\" aria-expanded=\"false\">Home</a>";
    document.getElementById("log_status_options").innerHTML="<li><a href=\"SP_profile.html\">Profile</a></li>"
    
}

var loc = window.localStorage.getItem("loc");
function search() {
    var loc = $("#search_location").val();
    window.localStorage.setItem("loc",loc);
    if(loc != '#')
        {
            document.getElementById("user_home_content").innerHTML="Places which matched your search.";
        }
    else {
        //by default all the places dispplayed here will be near the user's location.
        document.getElementById("user_home_content").innerHTML="<h4>Places near you.</h4>";
    }
    
}

    