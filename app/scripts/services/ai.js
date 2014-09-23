'use strict';

angular.module('PalSzak.Hexwar').service( 'ai', function($rootScope, playerService){

    function resultReceiver(event) {
        console.log(event);
        $rootScope.$broadcast('actions-recived', event.data);
    }

    function errorReceiver(event) {
        console.log(event);
        throw event.data;
    }

    this.work =function (board) {
        var worker = new Worker('/scripts/workers/ai.js');
        worker.onmessage = resultReceiver;
        worker.onerror = errorReceiver;
        worker.postMessage(board);
    };

});
