console.log("jj");
var username = true;
var password = true;
var max = true;
function Login(){
    var name = document.getElementById("username").value;
    var pww = document.getElementById("pw").value;

    if(username == true && name.value == null){
        alert("Please fill in username");
        username = false;
    }

    else if(password == true && pww.value == null){
        alert("Please fill in password");
        password = false
    }

    else{
        localStorage.setItem("username", name);
        localStorage.setItem("pw", pww);
        alert("Login");
        console.log("login");
        window.location = "kwitter_room.html";
    }
}