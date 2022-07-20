'use strict';

module.exports = (function(){
const { function_starts, super_check, super_method_check } = require('./REG.js');

/**
 * @name repairConstructor
 * @param {Function} constructor 
 * @param {String} name 
 * @return {String} repaired constructor of class
 * 
 * @description
 *  1. 반드시 new 키워드로만 호출되도록 _classCallCheck 함수 추가
 *  2. 생산성을 위해 _super(...)로 작성한 코드를 _super.call(...)로 변경
 *  3. 매개변수로 받은 name을 새로운 함수명으로 변환(name 속성이 됨)
 * 
 * 목적: 생산성 증대
 */
function _repairConstructor(constructor, name){
    return uneval(constructor)
            .replace(function_starts, "(function " + name + "(" + p + "){\n"
                                          + "_classCallCheck(this, " + name + ");\n")
            .replace(super_check, "_super.call(this, $1);")
            .replace(super_method_check, "_super.$1.call(this, $2);");
}


return _repairConstructor;
})();