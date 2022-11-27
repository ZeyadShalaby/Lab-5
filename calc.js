let n1 = parseFloat(prompt("Please enter the first number"));
let operation = prompt("Enter the operation you want to be done on your inputs");
let n2 = parseFloat(prompt("Please enter the second number"));  

switch (operation) {
    case "+":
        alert(`Sum is equal to ${n1+n2}`);
        break;
    case "-":
        alert(`Subtraction is equal to ${n1-n2}`);
        break;
    case "*":
        alert(`Multiplication is equal to ${n1*n2}`);
        break;
    case "/":
        alert(`Division is equal to ${n1/n2}`);
        break;

}