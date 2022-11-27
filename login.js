document.querySelector('form').onsubmit = function(event){
    event.preventDefault();
    const username = document.querySelector('#username').value;
    const password= document.querySelector("#password").value;

    if (username == "admin" && password == "421$$"){

        alert("Welcome login success");
        return false;
    }
    else if (username != "admin" && password == "421$$"){

        alert("Username is wrong");
        
    }
    else if (password != "421$$" && username == "admin") {
        alert("Password is wrong");
    
    }
    else {
        alert("Username and Password are wrong");
    }
}