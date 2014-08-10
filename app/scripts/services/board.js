'use strict';

angular.module('PalSzak.Hexwar').service( 'boardService', function($rootScope){
    this.getBoard = function(){
        return board;
    }

    this.move = function(from,to,amount){
        console.log('from',from,'to',to,'amount',amount);
        //board[from.idx.q][from.idx.r].population = board[from.idx.q][from.idx.r].population - amount;
        //board[to.idx.q][to.idx.r].population = board[to.idx.q][to.idx.r].population + amount;
        $rootScope.$broadcast('set-a-move',{from:from,to:to,amount:amount});
    }

    this.getField = function(idx){
        if(!!idx && !!idx.q && !!idx.r){
            return board[idx.q][idx.r];
        } else {
            return undefined;
        }
    }

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
