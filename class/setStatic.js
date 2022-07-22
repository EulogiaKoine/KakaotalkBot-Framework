'use strict';

module.exports = (function(){

const _defineProperty = require('./_defineProperty.js');

function setStatic(_Class, prop){
    if(prop.isClassHelper && prop.name === "static field"){
        _defineProperty(_Class.prototype, prop);
    } else {
        throw new SyntaxError('2nd argument must be a result of static() function');
    }
}

return setStatic;
})();