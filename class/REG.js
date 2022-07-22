'use strict';

/**
 * @tested
 */


module.exports = (function(){

const REGS = {
    'function_starts': /^\(function [0-9A-z가-힣_$]*\((([_$A-z가-힣]+[_$0-9A-z가-힣]*\,*\s*){0,})\) \{\n*/,
    'super_check': /\s*_super\((([^]*\,*\s*){0,})\)\;/g,
    'super_method_check': /_super\.([_$A-z가-힣]+[_$0-9A-z가-힣]*)\((([^]+\,*\s*){0,})\)\;/g
};

return REGS;
})();