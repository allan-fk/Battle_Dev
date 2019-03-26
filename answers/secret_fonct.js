
//***************************************************************
//*
//*
//* SOLUTION BY arbona
//*
//*
//******************************************************************

var input = [];

readline_object.on("line", (value) => { //Read input values
	input.push(value);
})
//Call ContestResponse when all inputs are read
readline_object.on("close", ContestResponse); 


function ContestResponse(){
	let n = +input[0];
	let fx = input[1].split(' ').map(x => +x);
	let n2 = n/2;
	let count = 0;
	let inf = false;
	
	for (let it = 1; it < n + 2; it += 1) {
	    if (fx[it - 1] == n2) {
	        count += 1;
	    }
	    if (fx[it - 1] == n2 & fx[it] == n2) {
	        inf = true;
	        break;
	    }
	    if (fx[it - 1] < n2 & n2 < fx[it]) {
	        count += 1;
	    }
	    if (fx[it - 1] > n2 & n2 > fx[it]) {
	        count += 1;
	    }
	}
	
	if (inf) {
	    console.log('INF');
	} else {
	    console.log(count);
	}
}

