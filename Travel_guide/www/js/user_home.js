var loc = window.localStorage.getItem("loc");

if(loc != '#')
        {
            document.getElementById("user_home_content").innerHTML="<h4>Places which matched your search.</h4>";
        }
else {
        //by default all the places dispplayed here will be near the user's location.
        document.getElementById("user_home_content").innerHTML="<h4>Places near you.</h4>";
    }

