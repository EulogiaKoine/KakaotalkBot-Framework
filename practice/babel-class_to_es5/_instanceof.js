/**
 * @name _instanceof
 * @param {*} left 피연산자 좌항
 * @param {*} right 피연산자 우항
 * @return {Boolean} 인스턴스 여부
 * 
 * @description 쓸데없다. 기존 연산자로 가능.
 * 
 * 덕분에 함수의 Symbol.hasInstance 프로토타입 메서드로 인스턴스 판별이 가능하다는 사실은 알았지만, 쓸 일은 없을 것 같다.
 * 
 */
function _instanceof(left, right) {
    if (
      right != null &&
      typeof Symbol !== "undefined" &&
      right[Symbol.hasInstance]
    ) {
      return !!right[Symbol.hasInstance](left);
    } else {
      return left instanceof right;
    }
}


//---------- 대체 코드 ----------
left instanceof right;