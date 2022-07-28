'use strict';

module.exports = function(STList, req){ //req 함수를 매개변수로 받아서 활용

const now = Date.now;
let id = 0;

/**
 * 
 * @param {Function} f function
 * @param {Number} d delay
 * @param {Array} a arguments
 */
function setTimeout2(f, d, a){
    if(typeof f !== 'function'){
        throw new TypeError("setTimeout2_ 1st argument must be a function; " + f + " is not a function");
    }

    if(typeof d !== 'number'){
        d = 0;
    }

    const i = {
        f: f,
        e: now() + d,
        id: ++id
    };

    if(a !== undefined && !(a instanceof Array)){
        throw new TypeError("setTimeout2_ 3rd argument must be either undefined or an array");
    } else {
        i.a = a;
    }

    req(this[id] = i /* 실행 중 목록에 넣는 동시에 */); //처리 요청

    return id;
}

return setTimeout2.bind(STList);
};