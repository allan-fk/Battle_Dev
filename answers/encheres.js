

/*************************************
Solution by arbona
****************************************/ 

var input = [];

readline_object.on("line", (value) => { //Read input values
	input.push(value);
})
//Call ContestResponse when all inputs are read
readline_object.on("close", ContestResponse); 


function ContestResponse(){
    let n = +input[0];
    let reserve = +input[1];
    let best = {
        price: -1,
        name: null,
    };
    
    for (let it = 2; it < n + 2; it += 1) {
        let [price, name] = input[it].split(' ');
        price = +price;
        
        if (price > reserve && price > best.price) {
            best.price = price;
            best.name = name;
        }
    }
    
    if (best.price == -1) {
        console.log('KO');
    } else {
        console.log(best.name);
    }
}

