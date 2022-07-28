"use strict";

module.exports = function(SIList){

function clearInterval2(i /* setInterval id */){
    if(i in this){
        this[i].c = true; //canceled
    }
}

return clearInterval2.bind(SIList);
};