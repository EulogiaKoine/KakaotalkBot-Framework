/**
 * @name _possibleConstructorReturn
 * @see _assertThisInitialized
 * @param {*} self 
 * @param {Object|Function} call 
 * @returns 
 * 
 * @description 함수형 프로그래밍 스타일의 함수
 * @description call의 타입을 제한시킴.
 */
function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
      return call;
    } else if (call !== void 0) {
      throw new TypeError(
        "Derived constructors may only return object or undefined" //파생 클래스는 오직 객체나 undefined만을 반환 가능합니다.
      );
    }
    return _assertThisInitialized(self); //여기서만 쓰임. 함수형 프로그래밍 스타일.
}


//--------- 대체 코드 ----------

function _possibleConstructorReturn(self, call) {
  if(call && (typeof call === "object" || typeof call === "function")) { //_typeof() 함수만 미사용
    return call;
  } else if(call !== void 0){
    throw new TypeError(
      "Derived constructors may only return object or undefined"
    );
  }
  return _assertThisInitialized(self);
}