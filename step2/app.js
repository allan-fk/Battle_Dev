const vardump = require("@smartankur4u/vardump");
module.exports = {
    ContestResponse: function () {
         // console.log(input);
         var pois = 0;
         var result = 1;
         for (let index = 1; index < input.length; index++) {

              pois += parseInt(input[index], 10);
              if (pois > 100) {
                result+=1;
                pois = parseInt(input[index], 10);
            }
              console.log(pois);
              
         }
         //console.log(pois);
         console.log(result);
        /*var result;
        var pos = 0;
        var diffPos = 0;
        console.log(input[0]);
        for (let index = 1; index < input.length; index++) {
            // console.log('lol')
            tab = input[index].split(' ');
            diffPos = parseInt(tab[1], 10)  - parseInt(tab[0], 10) ;
            //console.log(diffPos);
            pos = pos + diffPos;
        }
        console.log(pos);
        pos = input[0] - pos; 
        console.log(pos);
        if (pos > 10000) {
            result =  'KO'
        } else if (pos < 100) {
            result = 1000;
        } else  {
            result = 100;
        }
        console.log(result);*/
    }
};