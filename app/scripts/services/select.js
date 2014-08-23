'use strict';

angular.module('PalSzak.Hexwar').service( 'selectService', function($rootScope, boardService, playerService, neighbours, neighbourName){
    var source;
    var target;
    var nameOfNeighbours;

    this.getNameOfNeighbour = function(){
        return nameOfNeighbours;
    };

    this.getSource = function(){
        return source;
    };

    this.getTarget = function(){
        return target;
    };

    var isNeighbours = this.isNeighbours = function (from , to){
        var isNeighbour = false;
        neighbours[(from.q+1) %2].forEach(function(offset) {var shifted = {r: to.r + offset[0], q: to.q + offset[1]};
            if(angular.equals(from, shifted)){
                nameOfNeighbours = neighbourName[(from.q+1) %2][offset[0]+1][offset[1]+1];
                isNeighbour = true;
            }
        });
        return isNeighbour;
    };

    this.setClicked = function(hex){
        if(boardService.getField(hex).owner !== 'empty' ){
            var change = false;
            if(angular.equals(hex, source)){
                source = undefined;
                target = undefined;
                change = true;
            } else if(angular.isDefined(source) && isNeighbours(source, hex)){
                target = hex;
                change = true;
            } else if(boardService.getField(hex).owner ===  playerService.getPlayer()){
                source = hex;
                target = undefined;
                change = true;
            }

            if(change){
                $rootScope.$broadcast('selection-changed');
            }
        }
    };

    this.deselectAll = function(){
        this.setClicked(source);
    };
} );
