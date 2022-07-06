/**
 * @name _assertThisInitialized
 * @param {Object} self 
 * @return {Object} self
 * 
 * @description
 * 함수명을 직역하자면, this 설정이 끝났음을 주장하다.
 * 인자(self)가 undefined가 아닌지 확인하고, 오류를 띄운다.
 */
function _assertThisInitialized(self) {
    if (self === void 0 /* === undefined. void 0이 더 빠르다. ㅇㅁㅇ */) {
      throw new ReferenceError( //참조 에러
        "this hasn't been initialised - super() hasn't been called"
        //초기 설정이 완료되지 않았습니다. super 클래스가 호출되어야 합니다.
      );
    }
    return self;
}

// * 대체 불가(필요 없음) *