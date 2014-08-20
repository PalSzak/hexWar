'use strict';

angular.module('PalSzak.Hexwar').service( 'turnService', function(boardService, selectService){
    this.move = function(from,to,amount){
        var moveingDiff = angular.isDefined(boardService.getField(from)[selectService.getNameOfNeighbour()]) ? amount - boardService.getField(from)[selectService.getNameOfNeighbour()] : amount;
        boardService.getField(from)[selectService.getNameOfNeighbour()] = amount;
        boardService.getField(from).population -= moveingDiff;
    };
} );
