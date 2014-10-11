'use strict';

hexWarCore.Hex = (function (){
    function Hex(population, coord, owner){
        this.population = population;
        this.owner = owner;
        this.coord = coord;
        this.percentMax = 100;
    }

    Hex.prototype.getNameOfNeighbour = function(to) {
        var nameOfNeighbour;
        if(hexWarCore.isDefined(to)){
            hexWarCore.neighbours[(this.coord.c+1) %2].forEach(function(offset) {
                var shiftedIdx = {r: to.coord.r + offset[0], c: to.coord.c + offset[1]};
                if(this.coord.c === shiftedIdx.c && this.coord.r === shiftedIdx.r ){
                    nameOfNeighbour = hexWarCore.neighbourName[(this.coord.c+1) %2][offset[0]+1][offset[1]+1];
                }
            }, this);
        }
        return nameOfNeighbour;
    };

    Hex.prototype.getNeighbour = function (nameOfNeighbour){
        var neighbourIdx;
        var names = hexWarCore.neighbourName[(this.coord.c+1) %2];
        search: for(var i = 0; i< 3; i++){
            for(var j = 0; j<3; j++){
                if(names[i][j] === nameOfNeighbour){
                    neighbourIdx = {
                        r: this.coord.r - (i -1),
                        c: this.coord.c - (j -1)
                    };
                    break search;
                }
            }
        }
        return neighbourIdx;
    };

    return Hex;
}(hexWarCore));
