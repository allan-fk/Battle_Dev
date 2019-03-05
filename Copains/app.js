const vardump = require("@smartankur4u/vardump");
module.exports = {
    ContestResponse: function () {
        var myNotes = input[0].split(' ').map(Number);
        // Conversion de la ligne de nos notes en tableau
        var friendsNotes = [];
        var diff = 0;
        var allDiff = [];
        var nbBestFriend = input[2];
        for (let index = 3; index < input.length; index++) {
            friendsNotes.push(input[index].split(' ').map(Number));
        }
        // Convertion de la ligne des notes de nos amis en tableau
        for (var y = 0; y < friendsNotes.length; y++) {
            for (let index = 0; index < myNotes.length; index++) {
                comp = (myNotes[index] > friendsNotes[y][index]) ? myNotes[index]-friendsNotes[y][index] : friendsNotes[y][index] - myNotes[index];
                diff += comp ;
            }
            allDiff.push(diff);
            //console.log(diff);
            diff = 0;
        }
        var sortDiff = Array.from(Array(allDiff.length).keys())
                  .sort((a, b) => allDiff[a] < allDiff[b] ? -1 : (allDiff[b] < allDiff[a]) | 0).slice(0,nbBestFriend)
        
        const arrAvg = arr => arr.reduce((a,b) => a + b, 0) / arr.length
        var notes = []
        for (let index = 0; index < nbBestFriend; index++) {
            notes.push(friendsNotes[sortDiff[index]][5])
        }
        //notes.push(friendsNotes[sortDiff[0]][5], friendsNotes[sortDiff[1]][5]);
        //notes.push(2, 17);
        result = Math.floor(arrAvg((notes)));
        console.log(result);
        //topValues = allDiff.sort((a,b) => a>b).slice(0,2)
        //console.log(sortDiff);

       /* test = (myNotes[0] > friendsNotes[0][0]) ? myNotes[0]-friendsNotes[0][0] : friendsNotes[0][0] - myNotes[0];
        
        vardump(myNotes);
        vardump(friendsNotes);
        vardump(test)*/
    }
};