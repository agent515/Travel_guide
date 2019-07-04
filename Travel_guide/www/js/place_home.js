var loc = window.localStorage.getItem("loc");

if(loc != '')
        {
            document.getElementById("place_home_content_msg").innerHTML="<h4>Places which matched your search.</h4>";
        }
else {
        //by default all the places dispplayed here will be near the user's location.
        document.getElementById("place_home_content_msg").innerHTML="<h4>Places near you.</h4>";
    }


db = openDatabase('travel_guide','1.0','Travel Guide DB',2*1024*1024);
if(loc == '')
{  
    email = window.localStorage.getItem('place');
    db.transaction(function (tx) {
        
        tx.executeSql('select * from places where email=?',[email], function (tx, results) { 
            var len = results.rows.length, i; 
            // length = len;
            for (var i = 0; i < len; i++) { 
                loc = results.rows.item(i).location;
                window.localStorage.setItem('loc',loc);        
            }
       
        }, null);
        
        
    });
    
    
}
db.transaction(function (tx) { 
    var rs = [];
    var length = 0;
    
    tx.executeSql('select * from places where location=?',[loc], function (tx, results) { 
        var len = results.rows.length, i; 
        length = len;
        for (var i = 0; i < len; i++) { 
            rs[i] = {'email':results.rows.item(i).email,
                    'place_name':results.rows.item(i).place_name,
                    'description':results.rows.item(i).description,
                    };
        }
        
        //////////rs[] has all the places' information///////////////
    //Now we'll inject place names into the user_home.html using for loop
    var data = "";
    for(var i = 0; i < length ; i++) {
        data += "<br><a><h3>"+rs[i].place_name+"</a></h3><a><p>"+rs[i].description+"</a></p><br>";
    }

    document.getElementById("place_home_content").innerHTML=data;
    ///////////////////////
    

    }, null);
    
    
        
    });
