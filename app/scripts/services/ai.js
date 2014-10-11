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

    this.work =function (state) {
        var worker = new Worker('/scripts/workers/ai.js');

        worker.onmessage = function(event){
            switch (event.data.type){
                case 'debug':
                    console.log.apply(console, event.data.message);
                    break;
                default:
                    resultReceiver(event);
                    break;
            }
        };

        worker.onerror = errorReceiver;

        worker.postMessage(state);
    };

});
