'use strict';

angular.module('PalSzak.Hexwar').service( 'playerService', function(){
    var players = [];
    var turn;

    this.getPlayers = function() {
        return players;
    };

    this.getPlayer = function() {
        return players[turn%players.length];
    };

    this.initGame = function(gameModel) {
        turn = -1;
        for(var player = 1; player<=gameModel.map.maxPlayer; player++){
            if(gameModel[player].type !== 'none'){
                gameModel[player].id = 'player'+player;
                players.push(gameModel[player]);
            }
        }

    };

    this.nextTurn = function() {
        turn++;
    };

} );
