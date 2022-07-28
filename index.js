'use strict';

module.exports = (function(){

const LIST = [
    'class', // 반 실패...
    'setTimeout2',
    'view'
].sort();

const framework = {};

for(let sub of LIST){
    Object.defineProperty(framework, sub, {
        value: require('./' + sub + '/index.js'),
        enumerable: true,
        configurable: true
    });
}


function init(global){
    for(let sub of LIST){
        this[sub].init(global);
    }
}
Object.defineProperty(framework, 'init', {
    value: init.bind(framework),
    enumerable: true,
    configurable: true
});

return framework;
})();