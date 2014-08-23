'use strict';

angular.module('PalSzak.Hexwar').service( 'boardService', function(neighbours, neighbourName){
    this.getBoard = function(){
        return board;
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
                owner: 'player1'
            },
            1:{
                population: 10,
                owner: 'player1'
            },
            2:{
                population: 10,
                owner: 'natural'
            },
            3:{
                population: 10,
                owner: 'natural'
            },
            4:{
                population: 10,
                owner: 'natural'
            },
            5:{
                population: 10,
                owner: 'player2'
            },
            6:{
                population: 10,
                owner: 'player2'
            }
        },
        1:{
            0:{
                population: 10,
                owner: 'player1'
            },
            1:{
                population: 10,
                owner: 'player1'
            },
            2:{
                population: 10,
                owner: 'natural'
            },
            3:{
                population: 10,
                owner: 'natural'
            },
            4:{
                population: 10,
                owner: 'natural'
            },
            5:{
                population: 10,
                owner: 'player2'
            },
            6:{
                population: 10,
                owner: 'player2'
            }
        },
        2:{
            0:{
                population: 10,
                owner: 'natural'
            },
            1:{
                population: 10,
                owner: 'natural'
            },
            2:{
                population: 10,
                owner: 'empty'
            },
            3:{
                population: 10,
                owner: 'natural'
            },
            4:{
                population: 10,
                owner: 'natural'
            },
            5:{
                population: 10,
                owner: 'natural'
            },
            6:{
                population: 10,
                owner: 'natural'
            }
        },
        3:{
            0:{
                population: 10,
                owner: 'natural'
            },
            1:{
                population: 10,
                owner: 'natural'
            },
            2:{
                population: 10,
                owner: 'natural'
            },
            3:{
                population: 10,
                owner: 'natural'
            },
            4:{
                population: 10,
                owner: 'natural'
            },
            5:{
                population: 10,
                owner: 'natural'
            },
            6:{
                population: 10,
                owner: 'natural'
            }
        },
        4:{
            0:{
                population: 10,
                owner: 'natural'
            },
            1:{
                population: 10,
                owner: 'natural'
            },
            2:{
                population: 10,
                owner: 'natural'
            },
            3:{
                population: 10,
                owner: 'natural'
            },
            4:{
                population: 10,
                owner: 'natural'
            },
            5:{
                population: 10,
                owner: 'natural'
            },
            6:{
                population: 10,
                owner: 'natural'
            }
        },
        5:{
            0:{
                population: 10,
                owner: 'player4'
            },
            1:{
                population: 10,
                owner: 'player4'
            },
            2:{
                population: 10,
                owner: 'natural'
            },
            3:{
                population: 10,
                owner: 'natural'
            },
            4:{
                population: 10,
                owner: 'natural'
            },
            5:{
                population: 10,
                owner: 'player3'
            },
            6:{
                population: 10,
                owner: 'player3'
            }
        },
        6:{
            0:{
                population: 10,
                owner: 'player4'
            },
            1:{
                population: 10,
                owner: 'player4'
            },
            2:{
                population: 10,
                owner: 'natural'
            },
            3:{
                population: 10,
                owner: 'natural'
            },
            4:{
                population: 10,
                owner: 'natural'
            },
            5:{
                population: 10,
                owner: 'player3'
            },
            6:{
                population: 10,
                owner: 'player3'
            }
        },
    };
    var board = sampleField;
} );
