'use strict';

module.exports = (function(){

/**
 * @name prop
 * @param {String} type_or_key
 * @param {*} key_or_value
 * @param {*} value
 * @return {Object}
 */
function prop(type_or_key, key_or_value, value){
    const obj = {};
    Object.defineProperties(obj, {
        isClassHelper: {
            value: true
        },
        name: {
            value: "prototype field"
        }
    });

    if(type_or_key === "get" || type_or_key === "set"){
        Object.defineProperties(obj, {
            type: {
                value: type_or_key
            },
            key: {
                value: new String(key_or_value)
            },
            value: {
                value: value,
                writable: true
            }
        });
    } else {
        Object.defineProperties(obj, {
            key: {
                value: new String(type_or_key)
            },
            value: {
                value: key_or_value,
                writable: true
            }
        });
    }

    return obj;
}


return prop;
})();