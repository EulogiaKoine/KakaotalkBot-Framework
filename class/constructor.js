/**
 * @name constructor
 * @param {Function} Constructor
 * @return {Object}
 * 
 * @description 생성자 함수 등록, 메인 클래스로 _class에서 반환됨
 */
function constructor(Constructor){
    if(typeof Constructor !== 'function'){
        throw new TypeError("constructor expression must be a function");
    }
    const obj = {};
    Object.defineProperties(obj, {
        isClassHelper: {
            value: true
        },
        name: {
            value: "constructor"
        },
        constructor: {
            value: Constructor
        }
    });
    return obj;
}