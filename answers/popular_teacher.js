
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

function isBusy(busy, hour) {
    for (let it = 0; it < busy.length; it += 1) {
        let b = busy[it];
        if (b <= hour & hour <= b + 60)
            return true;
        if (hour <= b & b <= hour + 60)
            return true;
    }
    return false;
}

function test(hours, busy) {
    if (hours.length === 0) {
        console.error(busy);
        return busy.length;
    }
    let poss = [];
    
    if (true) {
        let _hours = hours.slice();
        poss.push(test(_hours.splice(1), busy.slice()));    
    }
    
    if (!isBusy(busy, hours[0].first)) {
        let tmp = busy.slice();
        let _hours = hours.slice();
        tmp.push(hours[0].first);
        poss.push(test(_hours.splice(1), tmp));
    }
    
    if (!isBusy(busy, hours[0].second)) {
        let tmp = busy.slice();
        let _hours = hours.slice();
        tmp.push(hours[0].second);
        poss.push(test(_hours.splice(1), tmp));
    }
    return Math.max(...poss);
}


function ContestResponse(){
    let n = +input[0];
    let hours = [];
    
    for (let it = 1; it < n + 1; it += 1) {
        let [first, second] = input[it].split(' ').map(x => +x);
        hours.push({
            first,
            second,
        });
    }
    const res = test(hours, [], 0);
    console.error(n, res);
    console.log(res);
}

