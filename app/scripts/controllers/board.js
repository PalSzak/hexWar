'use strict';

angular.module('PalSzak.Hexwar')
  .controller('boardController', function($scope, sizes, boardService) {
    var sizeIndex = 2;
    $scope.size = sizes[sizeIndex].name;

    function calculateBoardWidth(hexMiddleWidth) {
        return (hexMiddleWidth * 2) + (boardService.getColumnCount()-1) * (hexMiddleWidth * 2.1) * 3/4 ;
    }

    $scope.width =  {width : calculateBoardWidth( sizes[sizeIndex].size ) +'px'};

    $scope.zoomIn = function(){
        sizeIndex += sizeIndex + 1 < sizes.length ? 1 : 0; 
        $scope.size = sizes[sizeIndex].name;
        $scope.width =  {width : calculateBoardWidth( sizes[sizeIndex].size ) +'px'};
    };

    $scope.zoomOut = function(){
        sizeIndex -= sizeIndex - 1 > -1 ? 1 : 0;
        $scope.size = sizes[sizeIndex].name;
        $scope.width =  {width : calculateBoardWidth( sizes[sizeIndex].size ) +'px'};
    };

  });
