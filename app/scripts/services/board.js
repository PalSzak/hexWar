'use strict';

angular.module('PalSzak.Hexwar').service( 'boardService', function($injector){
    var board;

    this.isInitialized = function(){
        return angular.isDefined(board);
    };

    this.getRowCount = function(){
        return board.getRowCount();
    };

    this.getColumnCount = function(){
        return board.getColumnCount();
    };

    this.getBoard = function(){
        return board.getBoard();
    };

    this.getField = function (idx){
        return board.getField(idx);
    };


    this.initGame = function(gameModel){
        board = new hexWarCore.Board(angular.copy($injector.get(gameModel.map.name)), gameModel);
    };

    this.getFieldOf = function(player){
        return board.getFieldOf(player);
    };

    this.getStatistic = function(player){
        return board.getStatistic(player);
    };

} );
