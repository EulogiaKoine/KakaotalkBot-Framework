'use strict';

module.exports = (function(){

const super_check_reg = require('./REG.js').super_check;

function _isUsingSuper(fn){
    if(typeof fn !== 'function'){
        throw new TypeError("_isUsingSuper; it must be a function");
    }

    return super_check_reg.test(uneval(fn));
}

return _isUsingSuper;
})();