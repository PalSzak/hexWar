'use strict';

angular.module('PalSzak.Hexwar').service( 'selectService', function(neighbours){
    var observerCallbacks = [];

    var source;
    var target;

    this.getSource = function(){
        return source;
    };

    this.getTarget = function(){
        return target;
    };

    var neig = this.isNeighbours  = function (hex1, hex2){
        var isNeighbour = false;
        neighbours[(hex1.q+1) %2].forEach(function(offset) {
            if(hex1.r === hex2.r+offset[0]  && hex1.q === hex2.q + offset[1]){
                isNeighbour = true;
            }
        });
        return isNeighbour;
    };


    this.setClicked = function(hex){
        if(angular.isUndefined(source)){
            source = hex;
        } else if( neig(source, hex) ){
            target = hex;
        } else if(angular.equals(hex, source)){
            source = undefined;
            target = undefined;
        } else {
            source = hex;
            target = undefined;
        }
        notifyObservers();
    };

    this.registerObserver = function(callback){
        observerCallbacks.push(callback);
    }

    var notifyObservers = function(){
        angular.forEach(observerCallbacks, function(callback){
            callback();
        });
    };

} );
