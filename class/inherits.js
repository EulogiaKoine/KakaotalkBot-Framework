'use strict';

function inherits(subClass, superClass){
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
    }
    this.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {value: subClass, writable: true, configurable: true}
    });
    Object.defineProperty(subClass, "prototype", { writable: false });
    if(superClass) subClass.__proto__ = superClass;
}

module.exports = inherits;