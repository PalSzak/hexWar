'use strict';

angular.module('PalSzak.Hexwar').service( 'boardService', function(){
    this.getBoard = function(){
        return board;
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
