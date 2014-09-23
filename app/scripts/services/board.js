'use strict';

angular.module('PalSzak.Hexwar').service( 'boardService', function($injector){
    var board, rLength, cLength;

    this.getRowCount = function(){
        return rLength;
    };

    this.getColumnCount = function(){
        return cLength;
    };

    this.getBoard = function(){
        return board;
    };

    var getField = this.getField = function (idx){
        if(angular.isDefined(idx) && angular.isDefined(idx.c) && angular.isDefined(idx.r)){
            return board[idx.r][idx.c];
        } else {
            return undefined;
        }
    };

    function init(map, gameModel){
        board = map;
        rLength = Object.keys(board).length;
        cLength = Object.keys(board[0]).length;
        for(var r = 0; r< rLength; r++){
            for(var c = 0; c< cLength; c++){
                board[r][c].idx = {r:r, c:c};
                board[r][c].percentMax = 100;
                for(var i =1; i<=gameModel.map.maxPlayer; i++){
                    if(board[r][c].owner === 'player'+i &&  gameModel[i].type === 'none'){
                        board[r][c].owner = 'natural';
                    }
                }
            }
        }
    }

    this.initGame = function(gameModel){
        var map = $injector.get(gameModel.map.name);
        init(angular.copy(map), gameModel);
    };

    this.getFieldOf = function(player){
        var fields = [];
        for(var r = 0; r< rLength; r++){
            for(var c = 0; c< cLength; c++){
                var field = board[r][c];
                if(field.owner === player){
                    fields.push(field);
                }
            }
        }
        return fields;
    };

    this.getStatistic = function(player){
        var statistic = {};
        for(var r = 0; r< rLength; r++){
            for(var c = 0; c< cLength; c++){
                var field = board[r][c];
                if(angular.isDefined(statistic[field.owner])){
                    statistic[field.owner]++;
                } else {
                    statistic[field.owner] = 1;
                }
            }
        }
        return statistic;
    };

} );
