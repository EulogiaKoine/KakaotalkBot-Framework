/**
 * @name _inherits
 * @see _setPrototypeOf(): 
 * @param {Function} subClass 자식 클래스
 * @param {Function} superClass 부모 클래스
 * @description 클래스 간의 상속 관계를 잇는다.
 *  1. prototype 속성 상속
 *   1-1. constructor 대체
 *  2. static 속성 상속
 */
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: { value: subClass, writable: true, configurable: true }
    });
    Object.defineProperty(subClass, "prototype", { writable: false });
    if (superClass) _setPrototypeOf(subClass, superClass);
}

//대체 코드(Function static 속성으로 확장)
Function.inherits = function _inherits(subClass, superClass){
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
    }
    this.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {value: subClass, writable: true, configurable: true}
    });
    Object.defineProperty(subClass, "prototype", { writable: false });
    if(superClass) subClass.__proto__ = superClass; //여기만 _setPrototypeOf 미사용으로 바꿈.
}