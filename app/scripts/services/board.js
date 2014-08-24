'use strict';

angular.module('PalSzak.Hexwar').service( 'boardService', function(){
    this.getRowCount = function(){
        return Object.keys(board).length;
    };

    this.getColumnCount = function(){
        return Object.keys(board[0]).length;
    };

    var getField = this.getField = function (idx){
        if(angular.isDefined(idx) && angular.isDefined(idx.c) && angular.isDefined(idx.r)){
            return board[idx.r][idx.c];
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
                owner: 'empty'
            },
            3:{
                population: 10,
                owner: 'empty'
            },
            4:{
                population: 10,
                owner: 'empty'
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
                owner: 'empty'
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
                owner: 'empty'
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
        6:{
            0:{
                population: 10,
                owner: 'natural'
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
                owner: 'empty'
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
                owner: 'natural'
            }
        },
        7:{
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
                owner: 'empty'
            },
            3:{
                population: 10,
                owner: 'natural'
            },
            4:{
                population: 10,
                owner: 'empty'
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
        8:{
            0:{
                population: 10,
                owner: 'player4'
            },
            1:{
                population: 10,
                owner: 'empty'
            },
            2:{
                population: 10,
                owner: 'natural'
            },
            3:{
                population: 10,
                owner: 'empty'
            },
            4:{
                population: 10,
                owner: 'natural'
            },
            5:{
                population: 10,
                owner: 'empty'
            },
            6:{
                population: 10,
                owner: 'player3'
            }
        }
    };

    function init(map){
        board = map;
        var rLength = Object.keys(board).length;
        for(var r = 0; r< rLength; r++){
            var cLength = Object.keys(board[r]).length;
            for(var c = 0; c< cLength; c++){
                board[r][c].idx = {r:r, c:c};
            }
        }
    }
    init(sampleField);
} );
