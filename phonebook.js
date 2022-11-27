var phonebook = [];


var requiredFunction = prompt("Enter what you'd like to do Add or Search");
    if (requiredFunction = "Add"){
        addPerson();

    }
    else if (requiredFunction = "Search"){
        searchPerson();
    }
    



function addPerson(){
    var person ={
        name: prompt("Enter the name of the person "),
        phone: prompt("Enter the phone number of the person ")
    }
    phonebook.push(person);
    
    
}

/* NOT FUNCTIONAL YET
function searchPerson() {
    var input = prompt("put name or phone number ? ");
    if (input == "name") {
        var name = prompt("enter name");

        phonebook.filter(function (item) {
            item.name == name;
            for (var i in item) {
                alert("name is " + item.name + " phone is " + item.phone);
            }
        }
        )
    }
    if (input == "number") {
        var number = prompt("enter number  ?");

        phonebook.filter(function (item) {
            item.phone == number;
            for (var i in item) {
                alert("name is  " + item.name + " and phone is " + item.phone);
            }
        }
        )
    }
} */ 


