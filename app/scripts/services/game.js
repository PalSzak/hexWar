'use strict';

angular.module('PalSzak.Hexwar').service( 'gameService', function($rootScope,  $location, $modal, playerService, boardService, selectService, ai){
    var gameFinished = false;
    var actionLists = {};
    var actions;

    if($location.path() === '/game' && !boardService.isInitialized()){
        $location.path('/');
    }

    this.startGame = function(gameModel) {
        playerService.initGame(gameModel);
        boardService.initGame(gameModel);
        playerService.getPlayers().forEach(function(player){
            actionLists[player.id] = [];
        });
        prepareNextTurn();
        $location.path('/game');
    };

    $rootScope.$on('actions-recived', function(event, actions) { //from ai
        actions.forEach(function(action){
            action.from = boardService.getField(action.from.coord);
            action.to = boardService.getField(action.to.coord);
            pushAction(action);
        });
        $rootScope.$digest();

        setTimeout(function(){ //TODO: some animation
            nextTurn();
            $rootScope.$digest();
        }, 1500);

    });

    var pushAction = this.pushAction = function(action){
        var index = actions.findIndex(function(element, index, array){
            if ( element.from.coord.r === action.from.coord.r &&
                 element.from.coord.c === action.from.coord.c &&
                 element.directionName === action.directionName ) {
                return true;
            } else {
                return false;
            }
        });

        if(index > -1){
            actions.splice(index, 1);
        }

        actions.push(action);
        action.from.prepareMove(action);
    };

    var nextTurn = this.nextTurn = function() {
        performThisTurn();
        prepareNextTurn();
    };

    function performThisTurn() {
        selectService.deselectAll();

        for(var i = 0; i < actions.length; i++) {
            actions[i].from.performMove(actions[i]);
            actions[i].to.recive(actions[i]);
            if(angular.isUndefined(actions[i].permanentMove) || actions[i].permanentMove === 0){
                actions.splice(i--, 1);
            }
        }

        boardService.getFieldOf(playerService.getPlayer().id).forEach(function(field) {
            field.grow();
        });

        var stat = boardService.getStatistic();

        playerService.getPlayers().forEach(function(player){
            if(angular.isUndefined(stat[player.id])){
                playerService.removePlayer(player);
            }
        });

        if(playerService.getPlayers().length === 1 && !gameFinished){
            gameFinished = true;
            gameEnd( playerService.getPlayers()[0]);
        }
    }

    function prepareNextTurn() {
        playerService.nextTurn();
        var player = playerService.getPlayer();
        actions = actionLists[player.id];

        actions.forEach(function(action) {
            action.moveCount = Math.floor(action.permanentMove/100 * action.from.population);
        });

        actions.forEach(function(action) {
            action.from.prepareMove(action);
        });

        if(player.type === 'ai'){
            ai.work({
                board: boardService.getBoard(),
                player: playerService.getPlayer(),
                players: playerService.getPlayers()
            });
        }
    }

    function gameEnd(winner){
        $modal.open({
            templateUrl: 'views/partials/modal/end.html',
            controller: ['$scope', '$modalInstance', 'winner', function ($scope, $modalInstance, winner) {
                $scope.winner = winner;

                $scope.ok = function () {
                    $modalInstance.close('newGame');
                };

                $scope.cancel = function () {
                    $modalInstance.dismiss('cancel');
                };
            }],
            size: 'lg',
            resolve: {
                winner: function () {
                    return winner;
                }
            }
        });
    }

} );
