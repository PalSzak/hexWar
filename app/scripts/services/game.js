'use strict';

angular.module('PalSzak.Hexwar').service( 'gameService', function($modal, playerService, boardService, selectService, fieldHelper){
    var neighbourNameList = ['bottomRight','bottom','bottomLeft','topRight','topLeft','top'];

    this.initGame = function(gameModel) {
        playerService.initGame(gameModel);
        boardService.initGame(gameModel);
        nextTurn();
    };

    var nextTurn = this.nextTurn = function() {
        selectService.deselectAll();
        var player = playerService.getPlayer();

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

        var stat = boardService.getStatistic();

        playerService.getPlayers().forEach(function(player){
            if(angular.isUndefined(stat[player.id])){
                playerService.removePlayer(player);
            }
        });

        console.log(playerService.getPlayers(), playerService.getPlayers().length);
        if(playerService.getPlayers().length === 1){
            gameEnd( playerService.getPlayers()[0], 500); 
        }

        playerService.nextTurn();

    };

    function move(player, field, amount){
        if(field.owner === player.id){
            field.population += amount;
        } else {
            attack(player, field, amount);
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

    function gameEnd(winner){
        $modal.open({
            templateUrl: 'views/partials/modal/end.html',
            controller: function ($scope, $modalInstance, winner) {
                $scope.winner = winner;

                $scope.ok = function () {
                    $modalInstance.close('newGame');
                };

                $scope.cancel = function () {
                    $modalInstance.dismiss('cancel');
                };
            },
            size: 'lg',
            resolve: {
                winner: function () {
                    return winner;
                }
            }
        });
    }

} );
