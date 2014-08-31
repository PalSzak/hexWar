'use strict';

angular.module('PalSzak.Hexwar').service( 'playerService', function(){
	var players = [];
	var turn = 1;

	this.getPlayer = function() {
		return players[players.length%turn].id;
	};

	this.initGame = function(gameModel) {
		console.log('ininin', gameModel);
		for(var player = 1; player<=gameModel.map.maxPlayer; player++){
			if(gameModel[player].type !== 'none'){
				gameModel[player].id = 'player'+player;
				players.push(gameModel[player]);
			}
		}
		console.log(players);
	}

} );
