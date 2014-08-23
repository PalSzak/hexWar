'use strict';

angular.module('PalSzak.Hexwar').service( 'selectService', function($rootScope, boardService, playerService){
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

    this.setClicked = function(hexCoord){
        var hexField = boardService.getField(hexCoord);
        if(hexField.owner !== 'empty' ){
            var change = false;
            nameOfNeighbours = boardService.getNameOfNeighbour(source, hexField);
            if(angular.equals(hexField, source)){
                source = undefined;
                target = undefined;
                change = true;
            } else if(angular.isDefined(source) && nameOfNeighbours){
                target = hexField;
                change = true;
            } else if(hexField.owner ===  playerService.getPlayer()){
                source = hexField;
                target = undefined;
                change = true;
            }

            if(change){
                $rootScope.$broadcast('selection-changed');
            }
        }
    };

    this.deselectAll = function(){
        this.setClicked(source.idx);
    };
} );
