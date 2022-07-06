/**
 * @name _getPrototypeOf
 * @param {Object} o 
 * @returns {Object} o.__proto__
 * 
 * 쓸데없다.
 * 1. Object.getPrototypeOf는 매우 낮은 버전에서부터 지원된다.
 * 2. 카톡봇에서는 함수 호출을 하나라도 줄여야 하는 신세이기 때문에(애달픈 연산 속도)
 *    그냥 결합도 원칙 조금 어기고 __proto__호출하는 게 낫다.
 */
function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function _getPrototypeOf(o) {
          return o.__proto__ || Object.getPrototypeOf(o);
        };
    return _getPrototypeOf(o);
}


//---------- 대체 코드 ----------
const o = new Object(); //객체형 아니더라도 상관없음
o.__proto__;