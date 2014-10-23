'use strict';

//this is only an ugly hack but i want something like this:



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

//return a move to closest non empty (enemy) field
function dummyAi(boardCopy, player){
    var neighbourNameList = ['bottomRight','bottom','bottomLeft','topRight','topLeft','top'];
    var fields = boardCopy.getFieldOf(player.id);
    var actions = [];
    fields.forEach(function(field){
        actions.push(closest(field));
    });

    log('PLAYER, FIELDS', player, fields);

    function noCircle(node, candidate){ //replace with 'grey white black'
        if(!hexWarCore.isDefined(node.father)){
            return true;
        } else if ( candidate.coord.c === node.field.coord.c && candidate.coord.r === node.field.coord.r ){
            return false;
        }
        return noCircle(node.father, candidate);
    }

    function closest(from){ //BreadthFirst
        var queue = [],
            node;

        log('SEARCH STARTED', from);
        queue.push({field : from});
        while(queue.length !== 0){
            node = queue.shift();
            log('WORKET IN SEARCH:', queue, node);

            if(node.field.owner !== from.owner){
                var to = node;
                while( hexWarCore.isDefined(to.father.father) ){
                    to = to.father;
                }

                log('ACTION CREATED', {
                    from: from,
                    to : to.field,
                    moveCount: from.population,
                    permanentMove: undefined,
                    directionName: to.direction
                });

                return {
                    from: from,
                    to : to.field,
                    moveCount: from.population,
                    permanentMove: undefined,
                    directionName: to.direction
                };
            }

            for( var i = 0; i < neighbourNameList.length; i++){
                var candidate = boardCopy.getField(node.field.getNeighbour(neighbourNameList[i]));
                if( hexWarCore.isDefined(candidate) && candidate.owner !== 'empty' && noCircle(node, candidate) ) {
                    queue.push({
                        field: candidate,
                        father: node,
                        direction: neighbourNameList[i]
                    });
                }
            }
        }
    }

    return actions;
}

self.onmessage = function(event) {

    var node = {
        board: event.data.game.board
    };

    var boardCopy = new hexWarCore.Board(node.board);

    log('GAME, BOARD, BOARD_COPY:', event.data.game, event.data.game.board, boardCopy);

    post(dummyAi(boardCopy, event.data.game.players[event.data.game.turn % event.data.game.players.length]));

/*    log('Test function copyed', boardCopy.getField({c:1, r:1}).getNeighbour('bottom') );

    setTimeout(function(){
        post(actions);
    }, 500);*/

};

/*
    Concrete implementation of minimax multiplayer(2+):
*/

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


/*
  Theoritical implementation of minimax:

  function minimax(node, depth, maximizingPlayer)
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
