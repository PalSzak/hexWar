'use strict';

var IS_WORKER = (typeof window === 'undefined');

var hexWarCore =  IS_WORKER ?
    hexWarCore || (hexWarCore = {}) : window.hexWarCore || (window.hexWarCore = {});

(function(){
    hexWarCore.neighbourName =
        [
          [ ['bottomRight','bottom','bottomLeft'],
            ['topRight','IMPOSSIBLE','topLeft'],
            ['IMPOSSIBLE','top','IMPOSSIBLE']
          ],
          [ ['IMPOSSIBLE','bottom','IMPOSSIBLE'],
            ['bottomRight','IMPOSSIBLE','bottomLeft'],
            ['topRight','top','topLeft']
          ]
        ];

    hexWarCore.neighbours =
        [
            [ [+1,  0], [-1, +1], [ 0, -1],
               [-1, -1], [-1,  0], [ 0, +1] ],
            [ [+1, +1], [+1,  0], [ 0, -1],
               [-1,  0], [+1, -1], [ 0, +1] ]
        ]; //ofset off odd-q layout; even first
}(hexWarCore));

if(IS_WORKER){
    importScripts(
        '/scripts/core/utilities.js',
        '/scripts/core/hex.js',
        '/scripts/core/board.js');
}
