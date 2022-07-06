/**
 * @see _getPrototypeOf(o): 그냥 o.__proto__
 * @param {} object 
 * @param {*} property
 * @return {Object|null}
 * @description object의 property가 프로토타입 체인 상 실제로 존재하는 위치를 확인하여 반환. 없으면 null.
 */
function _superPropBase(object, property) {
    while (!Object.prototype.hasOwnProperty.call(object, property)) {
      object = _getPrototypeOf(object);
      if (object === null) break;
    }
    return object;
}

//대체 코드: 간결화
const hasOwnProperty = Object.prototype.hasOwnProperty; //참조 횟수 줄이기

function _superPropBase(object, property) {
    while(!hasOwnProperty.call(object, property)){
        object = object.__proto__;
        if(object === null) break;
    }
    return object;
}