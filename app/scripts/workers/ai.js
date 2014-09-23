'use strict';

var actions = [];

onmessage = function(event) { // jshint ignore:line
  actions.push({alma: 'korte'});

  setTimeout(function(){
    postMessage(actions); // jshint ignore:line
  }, 500);

};
