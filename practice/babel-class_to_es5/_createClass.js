/**
 * @name _createClass
 * @see _defineProperties
 * @param {*} Constructor 
 * @param {*} protoProps 
 * @param {*} staticProps 
 * @return {Function} 클래스화된 생성자 함수
 * 
 * @description proto/static 속성 일괄 추가
 *  Babel.js의 컴파일 과정에서 들어갔을 뿐, 생산성은 전혀 고려하지 않은 구조.
 */
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", { writable: false });
    return Constructor;
}


// ---------- 대체 코드 ----------
/*

폐지.
문법적으로 좀 더 친화적인 방향을 고려할 것.

*/