'use strict';

angular.module('PalSzak.Hexwar').service( 'fieldHelper', function(neighbours, neighbourName){
    this.getNameOfNeighbour = function (from , to){
        var nameOfNeighbour;
        if(angular.isDefined(from) && angular.isDefined(to)){
            neighbours[(from.idx.c+1) %2].forEach(function(offset) {
                var shiftedIdx = {r: to.idx.r + offset[0], c: to.idx.c + offset[1]};
                if(angular.equals(from.idx, shiftedIdx)){
                    nameOfNeighbour = neighbourName[(from.idx.c+1) %2][offset[0]+1][offset[1]+1];
                }
            });
        }
        return nameOfNeighbour;
    };

    this.getNeighbour = function (field, nameOfNeighbour){
        var neighbourIdx;
        var names = neighbourName[(field.idx.c+1) %2];
        search: for(var i = 0; i< 3; i++){
            for(var j = 0; j<3; j++){
                if(names[i][j] === nameOfNeighbour){
                    neighbourIdx = {
                        r: field.idx.r - (i -1),
                        c: field.idx.c - (j -1)
                    };
                    break search;
                }
            }
        }
        return neighbourIdx;
    };
} );
