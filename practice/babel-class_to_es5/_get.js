/**
 * @name _get
 * @see Reflect ES6 이상에 내장된 함수, 객체 프록시 패키지. 클래스 아니다.
 * @see _superPropBase(): 속성 기반 프로토타입 체인 추적.
 * @param {*} target 속성을 불러올 객체
 * @param {String|Number} property 불러올 속성명
 * @param {*} receiver 속성이 get 타입일 경우 this로 호출될 객체
 */
function _get(target, property, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.get) {
      _get = Reflect.get.bind();
    } else {
      _get = function _get(target, property, receiver) {
        var base = _superPropBase(target, property);
        if (!base) return;
        var desc = Object.getOwnPropertyDescriptor(base, property);
        if (desc.get) {
          return desc.get.call(arguments.length < 3 ? target : receiver);
        }
        return desc.value;
      };
    }
    return _get.apply(this, arguments);
}

//---------- 대체 코드 ---------

//어차피 ES5에 Reflect 프록시 없음.
function _get(target, property, receiver) {
    let base = _superPropBase(target, property);
    if(!base) return;
    base = Object.getOwnPropertyDescriptor(target, property); //어떻게든 변수 재활용
    if(base.get){
        return base.get.call(receiver? receiver: target);
    }
    return base.value;
}