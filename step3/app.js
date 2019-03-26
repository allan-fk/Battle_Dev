const vardump = require("@smartankur4u/vardump");
module.exports = {
    ContestResponse: function () {
         console.log(input);
         
        function countInstances(string, word) {
            return string.split(word).length - 1;
        } 
         choice = '';
         var occurences = 0;
         var ligneVide = '';
         var inverse = false;
         for (let i = 1; i < input.length; i++) {
             for (let y = 0; y < input[i].length; y++) {
                 //console.log(input[i][y]);
                if (!input[i].includes("o")) {
                    //choice = 'v';
                    ligneVide += 'v';
                    //console.log('v')
                    y = input[i].length;
                } else {
                    if (ligneVide !== '')
                    console.log(ligneVide);
                    ligneVide = '';
                    occurences = countInstances(input[i], 'o')
                    if(input[i][y] == 'o'){
                         console.log('x')
                         if(y !== input[i].length-1)
                            console.log('>')
                         occurences -= 1;
                    } else if (occurences !== 0 && input[i][y] !== 'o')
                        console.log('>')
                    //console.log(y)
                    //console.log(input[i].length-1)
                    if(y == input[i].length-1) {
                        for (let x = i; x < input.length; x++) {
                            for (let z = y; z < input[x].length; z++) {
                                if(input[x].includes("o")){
                                    inverse = false;
                                } else {
                                    inverse = true;
                                }
                            }
                        }
                        console.log(inverse);
                    }
                    
                } 
                    
                    /*else {
                     console.log('v')
                     y = input[i].length;
                 }*/
             }
            /*if (!input[i].includes("o")) {
                console.log('v')
            }*/
        }
         /*var pois = 0;
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
         console.log(result);*/
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