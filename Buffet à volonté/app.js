const vardump = require("@smartankur4u/vardump");
module.exports = {
    ContestResponse: function () {
        var prixParPersonne = parseInt(input[0]),
            total = 0,
            gainTable = 0;
        for (let index = 2; index < input.length; index++) {
            var nbPersonnes = parseInt(input[index])
            if (nbPersonnes >= 4 && nbPersonnes < 6) {
                gainTable = prixParPersonne - (prixParPersonne/100)*10;
                total += nbPersonnes * gainTable;
            }
            else if (nbPersonnes >= 6 && nbPersonnes < 10) {
                gainTable = prixParPersonne - (prixParPersonne/100)*20;
                total += nbPersonnes * gainTable;
            }
            else if (nbPersonnes >= 10) {
                gainTable = prixParPersonne - (prixParPersonne/100)*30;
                total += nbPersonnes * gainTable;
            } else
                total += nbPersonnes * prixParPersonne;
        }
        console.log(Math.ceil(total));
    }
};