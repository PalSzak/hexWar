'use strict';
importScripts('/scripts/core/hexWarCore.js');

function post(event){
    self.postMessage(event);
}

var log = function(){
    post({
        type: 'debug',
        message: Array.prototype.slice.call(arguments)
    });
};


var actions = [];

var player, players, numOfPlayers;

self.onmessage = function(event) {

    actions.push({alma: 'korte'});

    var node = {
        board: event.data.board
    };
    player = event.data.player;
    players = event.data.players;
    numOfPlayers = players.length;

    var boardCopy = new hexWarCore.Board(node.board);

    log('Log from worker: recived data', boardCopy);

    setTimeout(function(){
        post(actions);
    }, 500);

};

var heuristic = function(node) {
    return 0;
};

var getChildren = function() {
    return [];
};

var minimax = function(node, depth, playerIndex) {
    if(depth === 0){
        return heuristic(node);
    } else {
        var bestNode = {};
        bestNode.vector = Array.apply(null, new Array(numOfPlayers)).map(function(){return Number.MIN_VALUE;});

        getChildren(node, playerIndex).forEach( function(childNode) {
            minimax(childNode, depth-1, playerIndex+1 % numOfPlayers);

            bestNode =
                bestNode.vector[playerIndex] > childNode.vector[playerIndex] ? bestNode : childNode;

        });
    }
};


/*function minimax(node, depth, maximizingPlayer)
    if depth = 0 or node is a terminal node
        return the heuristic value of node
    if maximizingPlayer
        bestValue := -∞
        for each child of node
            val := minimax(child, depth - 1, FALSE)
            bestValue := max(bestValue, val)
        return bestValue
    else
        bestValue := +∞
        for each child of node
            val := minimax(child, depth - 1, TRUE)
            bestValue := min(bestValue, val)
        return bestValue

(* Initial call for maximizing player *)
minimax(origin, depth, TRUE)*/
