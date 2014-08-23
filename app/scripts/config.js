'use strict';

angular.module('PalSzak.Hexwar')
  .constant('version', 'v0.1.0')
  .constant('state')
  .constant('neighbourName',
    [
      [ ['bottomRight','bottom','bottomLeft'],
        ['topRight','IMPOSIBLE','topLeft'],
        ['IMPOSIBLE','top','IMPOSIBLE']
      ],
      [ ['IMPOSIBLE','bottom','IMPOSIBLE'],
        ['bottomRight','IMPOSIBLE','bottomLeft'],
        ['topRight','top','topLeft']
      ]
    ]
  ).constant('neighbours',
    [
     [ [+1,  0], [-1, +1], [ 0, -1],
       [-1, -1], [-1,  0], [ 0, +1] ],
     [ [+1, +1], [+1,  0], [ 0, -1],
       [-1,  0], [+1, -1], [ 0, +1] ]
    ]
  ); //ofset off odd-q layout; even first

