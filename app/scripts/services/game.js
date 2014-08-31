'use strict';

angular.module('PalSzak.Hexwar').service( 'gameService', function(playerService, boardService, selectService, fieldHelper){
    var neighbourNameList = ['bottomRight','bottom','bottomLeft','topRight','topLeft','top'];

    this.initGame = function(gameModel) {
        playerService.initGame(gameModel);
        boardService.initGame(gameModel);
        nextTurn();
    };

    var nextTurn = this.nextTurn = function() {
        selectService.deselectAll();
        var player = playerService.getPlayer();
        playerService.nextTurn();

        console.log(player);
        if(angular.isDefined(player)){
            boardService.getFieldOf(player.id).forEach(function(field) {
                populationGrow(field);
                neighbourNameList.forEach(function(neighbourName){
                    if(angular.isDefined(field[neighbourName])){
                        var neighbour = boardService.getField(fieldHelper.getNeighbour(field, neighbourName));
                        move(player, neighbour, field[neighbourName]);
                        delete field[neighbourName];
                    }
                });
            });
        }
    };

    function move(player, field, amount){
        if(field.owner === player.id){
            field.population += amount;
        } else {
            attack(player, field, amount)
        }
    }

    function attack(atacker, field, amount){
        field.population -= amount;
        if(field.population < 0){
            field.population *= -1;
            field.owner = atacker.id;
        }
    }

    function populationGrow(field){
        field.population++;
    }

} );
