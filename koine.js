'use strict';

module.exports = (function(){

const LIST = [
    // 'class' // 프로젝트 실패
].sort();

const framework = {};

for(let sub of LIST){
    Object.defineProperty(framework, sub, {
        value: require('./' + sub + '/index.js'),
        enumerable: true,
        configurable: true
    });
}


return framework;
})();