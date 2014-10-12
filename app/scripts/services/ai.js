'use strict';

angular.module('PalSzak.Hexwar').service( 'ai', function($rootScope, playerService){
    var worker = new Worker('/scripts/workers/ai.js');

    function resultReceiver(event) {
        console.log(event);
        $rootScope.$broadcast('actions-recived', event.data);
    }

    function errorReceiver(event) {
        console.log(event);
        throw event.data;
    }

    this.work =function (state) {
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

        console.log('WORKER START');
        worker.postMessage(state);
    };

});
