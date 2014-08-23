'use strict';

angular.module('PalSzak.Hexwar').service( 'boardService', function(neighbours, neighbourName){
    this.getBoard = function(){
        return board;
    };

    var getField = this.getField = function (idx){
        if(angular.isDefined(idx) && angular.isDefined(idx.c) && angular.isDefined(idx.r)){
            return board[idx.r][idx.c];
        } else {
            return undefined;
        }
    };

    this.getNameOfNeighbour = function (from , to){
        var nameOfNeighbour;
        if(angular.isDefined(from) && angular.isDefined(to)){
            neighbours[(from.idx.c+1) %2].forEach(function(offset) {
                var shiftedIdx = {r: to.idx.r + offset[0], c: to.idx.c + offset[1]};
                if(angular.equals(from.idx, shiftedIdx)){
                    nameOfNeighbour = neighbourName[(from.idx.c+1) %2][offset[0]+1][offset[1]+1];
                }
            });
        }
        return nameOfNeighbour;
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
    var board = sampleField;
    function init(){
        var rLength = Object.keys(board).length;
        for(var r = 0; r< rLength; r++){
            var cLength = Object.keys(board[r]).length;
            for(var c = 0; c< cLength; c++){
                board[r][c].idx = {r:r, c:c};
            }
        }
    }
    init();
} );
