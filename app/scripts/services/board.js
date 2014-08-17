'use strict';

angular.module('PalSzak.Hexwar').service( 'boardService', function($rootScope){
    var actions = new Map();

    this.getBoard = function(){
        return board;
    };

    this.move = function(from,to,amount){
        var actionsFrom, action;
        if(angular.isDefined(actions.get(from))){
            actionsFrom = actions.get(from);
        } else {
            actionsFrom = new Map();
        }

        if(angular.isDefined(actionsFrom.get(to))){
            action = actionsFrom.get(to);
        } else {
            action = {};
        }

        action.amount = amount;
        getField(from).population -= amount;
        $rootScope.$broadcast('set-a-move',{from:from,to:to,amount:amount});
    };

    this.getAction = function(from,to){
        if(angular.isDefined(actions.get(from)) && angular.isDefined(actions.get(from).get(to))){
            return actions.get(from).get(to);
        } else {
            return undefined;
        }
    };

    var getField = this.getField = function (idx){
        if(angular.isDefined(idx) && angular.isDefined(idx.q) && angular.isDefined(idx.r)){
            return board[idx.r][idx.q];
        } else {
            return undefined;
        }
    };

    //DEMO CONTENT START HERE
    var sampleField = {
        0:{
            0:{
                population: 10,
                owner: 'natural',
                actions: []
            },
            1:{
                population: 10,
                owner: 'natural',
                actions: []
            },
            2:{
                population: 10,
                owner: 'natural',
                actions: []
            },
            3:{
                population: 10,
                owner: 'natural',
                actions: []
            },
            4:{
                population: 10,
                owner: 'natural',
                actions: []
            },
            5:{
                population: 10,
                owner: 'natural',
                actions: []
            },
            6:{
                population: 10,
                owner: 'natural',
                actions: []
            }
        },
        1:{
            0:{
                population: 10,
                owner: 'natural',
                actions: []
            },
            1:{
                population: 10,
                owner: 'natural',
                actions: []
            },
            2:{
                population: 10,
                owner: 'natural',
                actions: []
            },
            3:{
                population: 10,
                owner: 'natural',
                actions: []
            },
            4:{
                population: 10,
                owner: 'natural',
                actions: []
            },
            5:{
                population: 10,
                owner: 'natural',
                actions: []
            },
            6:{
                population: 10,
                owner: 'natural',
                actions: []
            }
        },
        2:{
            0:{
                population: 10,
                owner: 'natural',
                actions: []
            },
            1:{
                population: 10,
                owner: 'natural',
                actions: []
            },
            2:{
                population: 10,
                owner: 'natural',
                actions: []
            },
            3:{
                population: 10,
                owner: 'natural',
                actions: []
            },
            4:{
                population: 10,
                owner: 'natural',
                actions: []
            },
            5:{
                population: 10,
                owner: 'natural',
                actions: []
            },
            6:{
                population: 10,
                owner: 'natural',
                actions: []
            }
        },
        3:{
            0:{
                population: 10,
                owner: 'natural',
                actions: []
            },
            1:{
                population: 10,
                owner: 'natural',
                actions: []
            },
            2:{
                population: 10,
                owner: 'natural',
                actions: []
            },
            3:{
                population: 10,
                owner: 'natural',
                actions: []
            },
            4:{
                population: 10,
                owner: 'natural',
                actions: []
            },
            5:{
                population: 10,
                owner: 'natural',
                actions: []
            },
            6:{
                population: 10,
                owner: 'natural',
                actions: []
            }
        },
        4:{
            0:{
                population: 10,
                owner: 'natural',
                actions: []
            },
            1:{
                population: 10,
                owner: 'natural',
                actions: []
            },
            2:{
                population: 10,
                owner: 'natural',
                actions: []
            },
            3:{
                population: 10,
                owner: 'natural',
                actions: []
            },
            4:{
                population: 10,
                owner: 'natural',
                actions: []
            },
            5:{
                population: 10,
                owner: 'natural',
                actions: []
            },
            6:{
                population: 10,
                owner: 'natural',
                actions: []
            }
        },
        5:{
            0:{
                population: 10,
                owner: 'natural',
                actions: []
            },
            1:{
                population: 10,
                owner: 'natural',
                actions: []
            },
            2:{
                population: 10,
                owner: 'natural',
                actions: []
            },
            3:{
                population: 10,
                owner: 'natural',
                actions: []
            },
            4:{
                population: 10,
                owner: 'natural',
                actions: []
            },
            5:{
                population: 10,
                owner: 'natural',
                actions: []
            },
            6:{
                population: 10,
                owner: 'natural',
                actions: []
            }
        },
        6:{
            0:{
                population: 10,
                owner: 'natural',
                actions: []
            },
            1:{
                population: 10,
                owner: 'natural',
                actions: []
            },
            2:{
                population: 10,
                owner: 'natural',
                actions: []
            },
            3:{
                population: 10,
                owner: 'natural',
                actions: []
            },
            4:{
                population: 10,
                owner: 'natural',
                actions: []
            },
            5:{
                population: 10,
                owner: 'natural',
                actions: []
            },
            6:{
                population: 10,
                owner: 'natural',
                actions: []
            }
        },
    };
    var board = sampleField;
} );
