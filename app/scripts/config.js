'use strict';

angular.module('PalSzak.Hexwar')
  .constant('version', 'v0.1.0')
  .constant('state')
  .constant('neighbourName',
    [
      [['move_bottom_right','move_bottom','move_bottom_left'],['move_top_right','IMPOSIBLE','move_top_left'],['IMPOSIBLE','move_top','IMPOSIBLE']],
      [['IMPOSIBLE','move_bottom','IMPOSIBLE'],['move_bottom_right','IMPOSIBLE','move_bottom_left'],['move_top_right','move_top','move_top_left']]
    ]
  ).constant('neighbours',
    [
     [ [+1,  0], [-1, +1], [ 0, -1],
       [-1, -1], [-1,  0], [ 0, +1] ],
     [ [+1, +1], [+1,  0], [ 0, -1],
       [-1,  0], [+1, -1], [ 0, +1] ]
    ]
  ); //ofset off odd-q layout; even first

