'use strict';

angular.module('PalSzak.Hexwar')
  .directive('hexfield', function() {
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

    return {
        scope: true,
        restrict: 'E',
        replace: 'true',
        controller: function($rootScope, $scope, selectService){
            $rootScope.field = sampleField;

             $scope.select=function(r, q){
                console.log('He is selected!', r, q);
                selectService.setClicked({r:r, q:q});
                $scope.$broadcast('hex-clicked');

            };
        },
        compile: function(element, attrs){
            console.log(sampleField);

            angular.forEach(sampleField, function(row, idx) {
                console.log(row, idx);
                element.append('<div hexrow="' + Object.keys(row).length + '" r="'+idx+'"/>');
            });

        }
      };
    });
