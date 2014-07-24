'use strict';

angular.module('PalSzak.Hexwar')
  .constant('version', 'v0.1.0')
  .constant('state')
  .constant('neighbours',
    [
     [ [+1,  0], [-1, +1], [ 0, -1],
       [-1, -1], [-1,  0], [ 0, +1] ],
     [ [+1, +1], [+1,  0], [ 0, -1],
       [-1,  0], [+1, -1], [ 0, +1] ]
    ]
  ); //ofset off odd-q layout; even first

