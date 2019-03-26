const vardump = require("@smartankur4u/vardump");
const lib = require('toast_lib');

module.exports = {
    ContestResponse: function () {
        input = JSON.parse("[" + input + "]"); // Convert str to arr
        /*maxVal = Math.max(...input); // Max val of arr
        indexVal = input.indexOf(maxVal); // Index of max val
        count = 0;*/
        console.log(input);
        console.log(lib.rev(input));

        /*while (input != input.sort) {
            input.reverse()
            count++;
        }*/
        // console.log(input.sort());
    }
};