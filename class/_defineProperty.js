'use strict';

module.exports = (function(){

/**
 * @name _defineProperty
 * @param {Object|Function} target 속성을 추가할 참조형 데이터
 * @param {String} key 기존 defineProperties 인자와 같은 형태, 역할
 * @param {Object} descriptor 속성 기술자
 * 
 * @description 기존 속성 기술자의 기본값이 모두 false지만, 여기선 true로 설정.
 */
function _defineProperty(target, {type, key, value}){
    Object.defineProperty(target, key, {
        enumerable: true,
        configurable: true
    });

    if(type){
        if(typeof value !== 'function'){
            throw new TypeError("get or set field must be a function");
        }

        switch(type){
            case "get":
                Object.defineProperty(target, key, {
                    get: value
                });
                break;
            
            case "set":
                Object.defineProperty(target, key, {
                    set: value
                });
                break;
        }
    } else {
        Object.defineProperty(target, key, {
            value: value,
            writable: true
        });
    }
}


return _defineProperty;
})();