'use strict';

module.exports = (function(){
const LIST = [
    '_class',
    '_classCallCheck',
    '_createSuper',
    '_defineProperty',
    '_extends',
    '_isUsingSuper',
    '_repairConstructor',
    '_repairMethod',
    'constructor',
    'inherits',
    'interface',
    'prop',
    'REG',
    'static'
].sort();

const OUTPUT = {};

for(let name of LIST){
    Object.defineProperty(OUTPUT, name, {
        value: require(name + '.js'),
        enumerable: true,
        configurable: true
    });
}

return OUTPUT;
})();