/**
 * @name _typeof
 * @param {Object} obj 피연산자
 * @return {Boolean}
 * 
 * @description Symbol형까지 자료형을 판별 가능한 함수. 그런데 기존 연산자도 가능하다.
 * 
 * 결론은, 쓸데없다. 폐기.
 * 
 */
function _typeof(obj) {
    "@babel/helpers - typeof";
    return (
      (_typeof =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (obj) {
              return typeof obj;
            }
          : function (obj) {
              return obj &&
                "function" == typeof Symbol &&
                obj.constructor === Symbol &&
                obj !== Symbol.prototype
                ? "symbol"
                : typeof obj;
            }),
      _typeof(obj)
    );
}


//---------- 대체 코드 ----------
typeof obj;