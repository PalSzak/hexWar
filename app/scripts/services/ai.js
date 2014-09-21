'use strict';

angular.module('PalSzak.Hexwar').service( 'ai', function($rootScope, $timeout, gameService, playerService){

    $rootScope.$on('turn-changed', function(event, args){
        if(playerService.getPlayer().type === 'ai'){
            $timeout(function(){ 
                gameService.nextTurn();
            }, 100);
        }
    });

});
