/*******
 * Read input from STDIN
 * Use: console.log()  to output your result.
 * Use: console.error() to output debug information into STDERR
 * ***/

const vardump = require("@smartankur4u/vardump");

const readline = require("readline"),
    fs = require("fs");

const readline_object = readline.createInterface({
    input: fs.createReadStream("input2.txt"),
    //output: process.stdout,
    console: false
});

var input = [];

readline_object.on("line", value => {
    input.push(value);
});

//Call ContestResponse when all inputs are read
readline_object.on("close", ContestResponse);

function ContestResponse() {
    var tab2 = [];
    var output = [];
    for (let index = 1; index < input.length; index++) {
        const element = input[index];
        for (let y = 0; y < element.split("").length; y++) {
            if (
                (element[y + 1] === " " || (y + 1) >= element.split("").length) && !/^\d+$/.test(element[y - 1])) {
                fig = parseInt(element[y]);
                tab2.push(fig);
            } else if (
                (element[y - 1] === " " || y === 0) && /^\d+$/.test(element[y + 1])
            ) {
                num = parseInt(element[y] + element[y + 1]);
                tab2.push(num);
            }
        }
        output.push(tab2);
        tab2 = [];
    }
    var tab3 = output.map(arr =>
        Math.ceil(arr.reduce((sum, item) => (sum += item / arr.length), 0))
    );
    console.log(Math.max.apply(Math, tab3));
}