'use strict';

module.exports = (function(){
const { function_starts, super_check, super_method_check } = require('./REG.js');

/**
 * @name _repairMethod
 * @param {Function} method
 * @param {String} name
 * @return {Function} repaired method of class
 * 
 * @description 크게 보자면, repairConstructor에서 클래스 체크만 빠진 느낌.
 */
function _repairMethod(method, name){
    return uneval(method)
            .replace(function_starts, "(function "+ (name || '') + "(" + p + "){\n")
            .replace(super_check, "_super.call(this, $1);")
            .replace(super_method_check, "_super.$1.call(this, $2);");  
}

return _repairMethod;
})();