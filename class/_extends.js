/**
 * @name _extends
 * @param {Function} Super 상속할 상위 클래스
 * @return {Object} 
 * 
 * @description helper function for ES5 class
 */
function _extends(Super){
    if(typeof Super !== 'function' && Super !== null){
        throw new TypeError("Super expression must either be null or a function");
    }
    const obj = {};
    Object.defineProperties(obj, {
        isClassHelper: {
            value: true
        },
        name: {
            value: "Super"
        },
        super: {
            value: Super
        }
    });
    return obj;
}