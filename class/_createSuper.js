'use strict';

/**
 * @name createSuper
 * @param {Function} Derived 파생(자식) 클래스
 * @description 원본 함수에서 차용한 것은
 *  1. super 함수를 반환하는 클로저 사용 방식
 *  2. 반드시 call로 this(인스턴스)를 지정해주어야 하는 방식: 오히려 의미로는 괜찮을지도...?
 * 
 * @return {Function} _super
 */
function createSuper(Derived){
    const Super = Derived.__proto__; //다른 클래스를 상속(inherit)했다는 것을 전제로 사용
    if(typeof Super !== 'function'){ //그래도 혹시 몰라서 검사 한 번. 실수할 수도 있으니.
      throw new TypeError('class '+Derived.name+" didn't inherited any other class; cannot create a super function");
    }
  
    // 원래 클래스의 super과 비슷한 역할
    function _super(){
      if(this instanceof Derived){ //혹시 모르지만, 클래스 영역 밖에서 쓰였거나 call로 인스턴스를 넣지 않았을 경우를 대비.
        Super.apply(this, arguments);
      } else {
        throw new SyntaxError(
          "super must be called with instance, at the Derived class" //super(함수)는 파생 클래스에서 인스턴스와 함께 호출되어야 합니다.
        );
      }
    }
  
    //메서드도 호출 가능하도록 담기
    //대신 call로 this 지정 필요
    const prototype = (_super.__proto__ = Super.prototype);
    for(let proto in prototype){
      if(typeof prototype[proto] === "function"){
        _super[proto] = (key => function(){
            return prototype[key].apply(this, arguments);
        })(key);
      }
    }
  
    return _super;
}

module.exports = createSuper;