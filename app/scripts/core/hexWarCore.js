'use strict';

var IS_WORKER = (typeof window === 'undefined');

var hexWarCore =  IS_WORKER ?
    hexWarCore || (hexWarCore = {}) : window.hexWarCore || (window.hexWarCore = {});

if(IS_WORKER){
    importScripts('/scripts/core/utilities.js', '/scripts/core/board.js');
}
