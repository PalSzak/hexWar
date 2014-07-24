'use strict';

angular.module('PalSzak.Hexwar')
  .directive('hexfield', function() {
    var sampleField = {
        0:{
            0:{
                weight: 10,
                owner: 'natural',
                actions: []
            },
            1:{
                weight: 10,
                owner: 'natural',
                actions: []
            },
            2:{
                weight: 10,
                owner: 'natural',
                actions: []
            },
            4:{
                weight: 10,
                owner: 'natural',
                actions: []
            },
            5:{
                weight: 10,
                owner: 'natural',
                actions: []
            },
            6:{
                weight: 10,
                owner: 'natural',
                actions: []
            }
        },
        1:{
            0:{
                weight: 10,
                owner: 'natural',
                actions: []
            },
            1:{
                weight: 10,
                owner: 'natural',
                actions: []
            },
            2:{
                weight: 10,
                owner: 'natural',
                actions: []
            },
            4:{
                weight: 10,
                owner: 'natural',
                actions: []
            },
            5:{
                weight: 10,
                owner: 'natural',
                actions: []
            },
            6:{
                weight: 10,
                owner: 'natural',
                actions: []
            }
        },
        2:{
            0:{
                weight: 10,
                owner: 'natural',
                actions: []
            },
            1:{
                weight: 10,
                owner: 'natural',
                actions: []
            },
            2:{
                weight: 10,
                owner: 'natural',
                actions: []
            },
            4:{
                weight: 10,
                owner: 'natural',
                actions: []
            },
            5:{
                weight: 10,
                owner: 'natural',
                actions: []
            },
            6:{
                weight: 10,
                owner: 'natural',
                actions: []
            }
        },
        3:{
            0:{
                weight: 10,
                owner: 'natural',
                actions: []
            },
            1:{
                weight: 10,
                owner: 'natural',
                actions: []
            },
            2:{
                weight: 10,
                owner: 'natural',
                actions: []
            },
            4:{
                weight: 10,
                owner: 'natural',
                actions: []
            },
            5:{
                weight: 10,
                owner: 'natural',
                actions: []
            },
            6:{
                weight: 10,
                owner: 'natural',
                actions: []
            }
        },
        4:{
            0:{
                weight: 10,
                owner: 'natural',
                actions: []
            },
            1:{
                weight: 10,
                owner: 'natural',
                actions: []
            },
            2:{
                weight: 10,
                owner: 'natural',
                actions: []
            },
            4:{
                weight: 10,
                owner: 'natural',
                actions: []
            },
            5:{
                weight: 10,
                owner: 'natural',
                actions: []
            },
            6:{
                weight: 10,
                owner: 'natural',
                actions: []
            }
        },
        5:{
            0:{
                weight: 10,
                owner: 'natural',
                actions: []
            },
            1:{
                weight: 10,
                owner: 'natural',
                actions: []
            },
            2:{
                weight: 10,
                owner: 'natural',
                actions: []
            },
            4:{
                weight: 10,
                owner: 'natural',
                actions: []
            },
            5:{
                weight: 10,
                owner: 'natural',
                actions: []
            },
            6:{
                weight: 10,
                owner: 'natural',
                actions: []
            }
        },
        6:{
            0:{
                weight: 10,
                owner: 'natural',
                actions: []
            },
            1:{
                weight: 10,
                owner: 'natural',
                actions: []
            },
            2:{
                weight: 10,
                owner: 'natural',
                actions: []
            },
            4:{
                weight: 10,
                owner: 'natural',
                actions: []
            },
            5:{
                weight: 10,
                owner: 'natural',
                actions: []
            },
            6:{
                weight: 10,
                owner: 'natural',
                actions: []
            }
        },
    };

    return {
        scope: true,
        restrict: 'E',
        replace: 'true',
        controller: function($scope, selectService){
            $scope.field = sampleField;

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
