'use strict';

module.exports = function(SIList, req){ //req 함수를 매개변수로 받아서 활용

const now = Date.now;
let id = 0;

/**
 * 
 * @param {Function} f function
 * @param {Number} d delay
 * @param {Array} a arguments
 */
function setInterval2(f, d, a){
    if(typeof f !== 'function'){
        throw new TypeError("setInterval2_ 1st argument must be a function; " + f + " is not a function");
    }

    if(typeof d !== 'number'){
        d = 1;
    }

    const i = {
        f: f,
        e: now() + d,
        r: true, //반복 여부
        d: d,
        id: ++id
    };

    if(a !== undefined && !(a instanceof Array)){
        throw new TypeError("setInterval2_ 3rd argument must be either undefined or an array");
    } else {
        i.a = a;
    }

    req(this[id] = i /* 실행 중 목록에 넣는 동시에 */); //처리 요청

    return id;
}

return setInterval2.bind(SIList);
};