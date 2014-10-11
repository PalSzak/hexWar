'use strict';

hexWarCore.Board = (function (){
    function Board (map, gameModel) {
        this.board = JSON.parse(JSON.stringify(map)); //copy constructor
        this.rLength = Object.keys(this.board).length;
        this.cLength = Object.keys(this.board[0]).length;

        if (typeof gameModel !== 'undefined'){
            for(var r = 0; r< this.rLength; r++){
                for(var c = 0; c< this.cLength; c++){
                    this.board[r][c].idx = {r:r, c:c};
                    this.board[r][c].percentMax = 100;
                    for(var i =1; i<=gameModel.map.maxPlayer; i++){
                        if(this.board[r][c].owner === 'player'+i &&  gameModel[i].type === 'none'){
                            this.board[r][c].owner = 'natural';
                        }
                    }
                }
            }
        }
    }

    Board.prototype.getRowCount = function(){
        return this.rLength;
    };

    Board.prototype.getColumnCount = function(){
        return this.cLength;
    };

    Board.prototype.getBoard = function(){
        return this.board;
    };

    Board.prototype.getField = function (idx){
        if(hexWarCore.isDefined(idx) && hexWarCore.isDefined(idx.c) && hexWarCore.isDefined(idx.r)){
            return this.board[idx.r][idx.c];
        } else {
            return undefined;
        }
    };


    Board.prototype.getFieldOf = function(player){
        var fields = [];
        for(var r = 0; r< this.rLength; r++){
            for(var c = 0; c< this.cLength; c++){
                var field = this.board[r][c];
                if(field.owner === player){
                    fields.push(field);
                }
            }
        }
        return fields;
    };

    Board.prototype.getStatistic = function(player){
        var statistic = {};
        for(var r = 0; r< this.rLength; r++){
            for(var c = 0; c< this.cLength; c++){
                var field = this.board[r][c];
                if(hexWarCore.isDefined(statistic[field.owner])){
                    statistic[field.owner]++;
                } else {
                    statistic[field.owner] = 1;
                }
            }
        }
        return statistic;
    };

    return Board;
}(hexWarCore));
