'use strict';

hexWarCore.Board = (function (){
    function Board (map, gameModel) {
        if (typeof gameModel !== 'undefined'){
            this.board = JSON.parse(JSON.stringify(map));
            this.board.rLength = Object.keys(this.board).length;
            this.board.cLength = Object.keys(this.board[0]).length;

            for(var r = 0; r< this.board.rLength; r++){
                for(var c = 0; c< this.board.cLength; c++){
                    var id =Number.parseInt(this.board[r][c].owner.slice(-1), 10);

                    this.board[r][c] = new hexWarCore.Hex(
                        this.board[r][c].population,
                        {r:r, c:c},
                        !Number.isNaN(id) && gameModel[id].type === 'none' ?
                            'natural' : this.board[r][c].owner
                    );
                }
            }
        } else {
            //copy constructor
            /* maybe Object.create(map);  It cause error, because board[0] no more key of board
               JSON.parse(JSON.stringify(map)); It doesn't copy prototype, but mixins maybe solve this  */
            this.board = Object.create(map); //this is the board object of the original Board
        }
    }

    Board.prototype.getRowCount = function(){
        return this.board.rLength;
    };

    Board.prototype.getColumnCount = function(){
        return this.board.cLength;
    };

    Board.prototype.getBoard = function(){
        return this.board;
    };

    Board.prototype.getField = function (coord){
        if(hexWarCore.isDefined(coord) && hexWarCore.isDefined(coord.c) && hexWarCore.isDefined(coord.r)){
            return this.board[coord.r][coord.c];
        } else {
            return undefined;
        }
    };


    Board.prototype.getFieldOf = function(player){
        var fields = [];
        for(var r = 0; r< this.board.rLength; r++){
            for(var c = 0; c< this.board.cLength; c++){
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
        for(var r = 0; r< this.board.rLength; r++){
            for(var c = 0; c< this.board.cLength; c++){
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
