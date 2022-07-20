'use strict';


module.exports = (function(){

const REGS = {
    'function_starts': /^\(function (?:\w|\d|가-힣)*\((([_$A-z가-힣]+[_$0-9A-z가-힣]*\,*\s*){0,})\) \{\n*/,
    'super_check': /_super\((([_$A-z가-힣]+[_$0-9A-z가-힣]*\,*\s*){0,})\)\;/g,
    'super_method_check': /_super\.([_$A-z가-힣]+[_$0-9A-z가-힣]*)\((([^]+\,*\s*){0,})\)\;/g
};

return REGS;
})();