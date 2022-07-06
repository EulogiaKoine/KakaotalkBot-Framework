/**
 * @name _classCallCheck
 * @see _instanceof
 * @param {Object} instance
 * @param {Function} Constructor
 * 
 * @description 클래스가 클래스로만 호출되도록, 즉 new 키워드를 사용하지 않으면 오류를 띄우는 책임.
 */
function _classCallCheck(instance, Constructor) {
    if (!_instanceof(instance, Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}


//---------- 대체 코드 ----------
function _classCallCheck(instance, Constructor){
    if(!(instance instanceof Constructor)){ //거의 쓸 필요가 없는 _instanceof 함수 참조 제거.
        throw new TypeError("Cannot call a class as a function");
    }
}