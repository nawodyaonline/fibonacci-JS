var output = [];

function fibonacciGenerator(number){    
    for(var x = 0 ; x < number ; x++){
        if(x === 0){
            output.push(x);
        }
        else if(x === 1){
             output.push(1);
        }
        else{
            var total = output[x-2] + output[x-1];
            output.push(total);
        }
    }
    console.log(output);

}

//Pass number of element that want you to the function
fibonacciGenerator(2);
