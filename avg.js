
//empty array of numbers

let numbers = [];       

//while loop to store the input into the array

while (true){
    let input = prompt("Add numbers");
    if (input == null){
        break;
    }
    numbers.push(Number(input));

    //function to iterate over the numbers in the array and calculate the sum

    let total = 0;
    numbers.forEach(input =>{
        total = total + input;

    })

    //to calculate the average

    let avg = 0;

    for (let i =0; i < numbers.length; i++){
        //variable to get the value of each index
        let currNum = numbers[i]
        avg += currNum;
    }
    avg = Number(total/numbers.length)


     
    alert(`Total: ${total} `, total)
    alert(`Average: ${avg}`, avg)

}


