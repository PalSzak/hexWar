'use strict';

angular.module('PalSzak.Hexwar').service( 'playerService', function(){
    var players, turn;

    this.getPlayers = function() {
        return players;
    };

    this.getPlayer = function() {
        if(angular.isDefined(players)){
            return players[turn%players.length];
        } else {
            return undefined;
        }
    };

    this.removePlayer = function(player) {
        var index = players.indexOf(player);
        if(index > -1){
            players.splice(index, 1);
        }
    };

    this.initGame = function(gameModel) {
        players = [];
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
