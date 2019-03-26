

/*************************************
Solution by arbona
****************************************/

var input = [];

readline_object.on("line", (value) => { //Read input values
	input.push(value);
})
//Call ContestResponse when all inputs are read
readline_object.on("close", ContestResponse);

function isMagic(words, word) {
    return (word.length >= 5 && word.length <= 7 &&
        (word.charCodeAt(0) +1 == word.charCodeAt(1)) &&
        ("aeiouy".split('').indexOf(word[word.length - 1]) != -1) &&
        words.indexOf(word) == -1);
}

function ContestResponse(){
    const words = [];
    const n = +input[0];
    
    
    
    for (let it = 1; it < n + 1; it += 1) {
        let word = input[it];
        if (isMagic(words, word)) {
            words.push(word);
        }
    }
    
    console.log(words.length);
}    

