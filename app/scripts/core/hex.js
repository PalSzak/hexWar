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

    function calculateChangeDiff(oldValue, newValue) {
        return hexWarCore.isDefined(oldValue) ? newValue - oldValue : newValue;
    }

    Hex.prototype.prepareMove = function (action){
        this.population -= calculateChangeDiff(this[action.directionName], action.moveCount);
        this[action.directionName] = action.moveCount;

        if(hexWarCore.isDefined(action.permanentMove)){
            var permanentDirectionName = action.directionName + '_permanent';
            if(action.permanentMove !== 0){
                this.percentMax -= calculateChangeDiff( this[permanentDirectionName], action.permanentMove);
                this[permanentDirectionName] = action.permanentMove;
            } else {
                delete this[permanentDirectionName];
            }
        }
    };

    Hex.prototype.performMove = function (action) {
        delete this[action.directionName];
    };

    Hex.prototype.recive = function (action){
        if(this.owner === action.from.owner){ //move
            this.population += action.moveCount;
        } else { //attack
            this.population -= action.moveCount;
            if(this.population < 0){
                this.population *= -1;
                this.owner = action.from.owner;
            }
        }
    };

    Hex.prototype.grow = function (){
        this.population++;
    };

    return Hex;
}(hexWarCore));
