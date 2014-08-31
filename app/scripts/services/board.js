'use strict';

angular.module('PalSzak.Hexwar').service( 'boardService', function($injector){
    var board;

    this.getRowCount = function(){
        return Object.keys(board).length;
    };

    this.getColumnCount = function(){
        return Object.keys(board[0]).length;
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
        var rLength = Object.keys(board).length;
        for(var r = 0; r< rLength; r++){
            var cLength = Object.keys(board[r]).length;
            for(var c = 0; c< cLength; c++){
                board[r][c].idx = {r:r, c:c};
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
    }

} );
