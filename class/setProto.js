'use strict';

module.exports = (function(){

const _repairMethod = require('./_repairMethod.js');
const _defineProperty = require('./_defineProperty.js');

function setProto(_Class, prop){
    if(prop.isClassHelper && prop.name === "prototype field"){
        if(_Class.__proto__ !== (function(){}).__proto__){ //다른 클래스를 상속했다면
            const _super = _Class._super;
            if(!_super){
                throw new InternalError("class " + _Class.name + " must be created with _class keyword");
            }

            if(typeof prop.value === 'function'){ //_super.method(...)를 _super.method.call(this, ...)로 변환
                prop.value = eval(_repairMethod(prop.value, prop.key));
            }
        }

        _defineProperty(_Class.prototype, prop);
    } else {
        throw new SyntaxError('2nd argument must be a result of prop() function');
    }
}

return setProto;
})();