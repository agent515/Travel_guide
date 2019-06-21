function sign_up() {
    if( document.getElementById('checked').checked == false ){
                alert("You need to accept our Terms and condition")
            }
    
    else {
        var db = openDatabase('travel_guide','1.0','Test DB',2*1024*1024);
        var fname = $('#fname').val();
        var lname = $('#lname').val();
        var email = $('#email').val();
        var pwd = $('#pwd').val();
        var cpwd = $('#cpwd').val();
        var location = $('#s1').val();
        if(pwd != cpwd){
            alert("Passwords do not match");
        }
        else{
            db.transaction(function(tx){
            tx.executeSql('CREATE TABLE IF NOT EXISTS USERS(fname varchar(25),lname varchar(25),email varchar(25)"+" PRIMARY KEY,password varchar(20),location varchar(25))');
            tx.executeSql('INSERT INTO USERS VALUES(?,?,?,?,?)',[fname,lname,email,pwd,location]);
            alert(results.rows.item(0).fname);
        });
//        executeSql('CREATE TABLE IF NOT EXISTS USERS(fname varchar(25),lname varchar(25),email varchar(25) unique,password"+" varchar(20),location varchar(25))');    
//        alert("Sign up successful");
        window.location.href = "index.html";
        }
        
        }

}