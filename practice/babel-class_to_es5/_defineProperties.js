/**
 * @name _defineProperties
 * @param {Object|Function} target 속성을 정의할 함수
 * @param {Array} props 속성 배열
 * 
 * @description Object.defineProperties의 배열형 개량 버전
 *  사실상 클래스 메서드 정의를 위한 함수
 */
function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) { // for-in 배열 순환으로 대체
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false; //순환 가능 여부를 
        descriptor.configurable = true; //설정 가능 여부의 기본값을 true로 설정
        if ("value" in descriptor) descriptor.writable = true; // get/set 타입이 아닐 경우, 즉 함수가 아닐 경우 본래 false인 기본값을 true로 설정.
        Object.defineProperty(target /* 객체 */, descriptor.key /* key */, descriptor /* 그거 */);
    }
}


// ---------- 대체 코드 ---------

//let 선호, 스코프or레지스터 낭비 최소화
//솔직히 원래 쓰던 거에서 property descriptor의 기본값만 다르게 설정하는 쪽이 편하다.
//...아예 안 쓰면 더 좋고. 최대한 기존 문법에 가깝게 모방할 것.
function _defineProperties(target, props){
    for(let descriptor of props){
        descriptor.enumerable = descriptor.enumerable || true;
        descriptor.configurable = true;
        if("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}

/**
 * @name defineProperties
 * @param {Object|Function} target 속성을 추가할 참조형 데이터
 * @param {Object} props 기존 defineProperties 인자와 같은 형태, 역할
 * 
 * @description 기존 속성 기술자의 기본값이 모두 false지만, 여기선 true로 설정.
 */
Object.defineProperties = function(target, props){
    let prop;
    for(let key in props){
        prop = props[key];
        prop.enumerable = prop.enumerable || true;
        prop.configurable = true;
        if("value" in prop) prop.writable = true;
        Object.defineProperty(target, key, prop);
    }
    return target;
}