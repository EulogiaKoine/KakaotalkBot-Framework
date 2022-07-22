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
    'prop',
    'REG',
    'setProto',
    'setStatic',
    'static'
].sort();

const OUTPUT = {};

for(let name of LIST){
    Object.defineProperty(OUTPUT, name, {
        value: require('./' + name + '.js'),
        enumerable: true,
        configurable: true
    });
}


OUTPUT.init = (function init(_global){
    _global.classPack = this;
    ['_class', '_extends', 'constructor', 'inherits', 'prop', 'static']
    .forEach(v => _global[v] = this[v]);
}).bind(OUTPUT)

return OUTPUT;
})();