'use strict';

module.exports = (function(){
const LIST = [
    '_class',
    '_classCallCheck',
    '_createSuper',
    '_defineProperty',
    '_extends',
    '_isUsingSuper',
    '_repairConstructor',
    '_repairMethod',
    'constructor',
    'inherits',
    'prop',
    'REG',
    'setProto',
    'setStatic',
    'static'
].sort();

const OUTPUT = {};

for(let name of LIST){
    Object.defineProperty(OUTPUT, name, {
        value: require('./' + name + '.js'),
        enumerable: true,
        configurable: true
    });
}


OUTPUT.init = (function init(_global){
    _global.classPack = this;
    ['_class', '_extends', 'constructor', 'inherits', 'prop', 'static']
    .forEach(v => _global[v] = this[v]);
}).bind(OUTPUT);

OUTPUT.description = [
    "ES6 이상 JS의 class 문법을 ES5로 구현하려는 결과.",
    "",
    "적용법: 글로벌 스코프에서 init(this) 실행.",
    "",
    " < 문법(example) >",
    "var Class = _class('클래스명', _extends(상속하는 클래스),",
    "   constructor(function(v){ //생성자 함수",
    "       _super(v); //super(v)과 동일",
    "   }),",
    "",
    "   static('정적 속성명', 값),",
    "   static('get/set', '정적 속성명', 값),",
    "",
    "   prop('프로토타입 속성명', /*값*/ function(){",
    "       _super.method(); //super.method()와 동일",
    "   )",
    "   prop('get/set', '프로토타입 속성명', 값),",
    ")",
    "",
    "비고: uneval -> eval을 통해 스코프 변경, _super 사용 등이 가능했지만 글로벌 스코프로밖에 전환할 수 없었다. 따라서 서브시스템을 모듈로 제작할 경우 해당 패키지 사용이 불가능.",
    " >> 글로벌 스코프에서만 사용한다면 괜찮다.",
    "",
    " < 추가 - 부산물 >",
    "결국 범용적으로 쓸만한 건 아래의 두 함수다.",
    "",
    "1. inherits(자식 클래스, 부모 클래스): 정적 속성, 프로토타입 등을 상속(체인 연결)",
    "2. _classCallCheck(this, 클래스): 생성자 함수 내 첫 번째 줄에 넣으면 new로만 호출할 수 있게 만들어준다."
].join("\n");

return OUTPUT;
})();