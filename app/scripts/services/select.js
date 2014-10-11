'use strict';

angular.module('PalSzak.Hexwar').service( 'selectService', function($rootScope, playerService){
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

    this.setClicked = function(clickedHex){
        var change = false;
        nameOfNeighbours = angular.isDefined(source)? source.getNameOfNeighbour(clickedHex) : undefined;

        if(angular.equals(clickedHex, source)){
            source = undefined;
            target = undefined;
            change = true;
        } else if(angular.isDefined(source) && nameOfNeighbours){
            target = clickedHex;
            change = true;
        } else if(playerService.getPlayer().type === 'player' && clickedHex.owner ===  playerService.getPlayer().id){
            source = clickedHex;
            target = undefined;
            change = true;
        }

        if(change){
            $rootScope.$broadcast('selection-changed');
        }
    };

    this.deselectAll = function(){
        this.setClicked(source);
    };
} );
