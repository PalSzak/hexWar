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
} );
