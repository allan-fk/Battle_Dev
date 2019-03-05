/*******
 * Read input from STDIN
 * Use: console.log()  to output your result.
 * Use: console.error() to output debug information into STDERR
 * ***/


const vardump = require("@smartankur4u/vardump");

const readline = require("readline"),
    fs = require("fs");

function getDirectories(path) {
    return fs.readdirSync(path).filter(function (file) {
        return fs.statSync(path + '/' + file).isDirectory();
    });
}
var dir1 = process.argv.slice(2, 3);
var dir2 = getDirectories("./" + process.argv.slice(2, 3));
var file = process.argv.slice(3, 4)

var tools = require('./'+ dir1[0] + '/app.js');

const readline_object = readline.createInterface({
    input: fs.createReadStream(dir1[0] + '/' + dir2[0] + '/' + file),
    //output: process.stdout,
    console: false
});

global.input = [];

readline_object.on("line", value => {
    input.push(value);
});

//Call ContestResponse when all inputs are read
readline_object.on("close", tools.ContestResponse);