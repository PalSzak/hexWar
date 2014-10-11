'use strict';

hexWarCore.Hex = (function (){
    function Hex(population, idx, owner){
        this.population = population;
        this.owner = owner;
        this.idx = idx;
        this.percentMax = 100;
    }

    return Hex;
}(hexWarCore));
