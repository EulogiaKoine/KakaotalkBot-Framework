/**
 * @name _createSuper
 * @see Reflect.construct
 * @see _isNativeReflectConstruct
 * @see _getPrototypeOf
 * @see _possibleConstructorReturn
 * @param {Function} Derived 
 * @return {Function} super
 * 
 * @description 자식(파생_Derived) 클래스로부터 그 부모 클래스(Super)를 가져온다.
 *  < 기능 >
 * 1. Reflect.construct가 존재할 경우 해당 프록시 함수로 생성한 인스턴스를 돌려준다.
 *   -> 이거 때문에 변환된 클래스 내부에서 굳이 다른 변수에 담아서 직접 return해야 하는 아리송함이 발생했다.
 * 2. 없으면, 그냥 this를 Super에 넣어서 뚝딱뚝딱 후 반환.
 */
function _createSuper(Derived /* 자식 클래스 */) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct(); //Reflect.construct 존재 여부 확인; 클로저로 확인됨; 스코프 낭비!
    return function _createSuperInternal() { //class 문법에서 super의 역할을 하는 함수 반환.
      var Super = _getPrototypeOf(Derived), // === Derived.__proto__ === Super
          result; //부모 클래스에서 자식 클래스까지 상속한 인스턴스
      if (hasNativeReflectConstruct) { //재구성 시, 반드시 true
        var NewTarget = _getPrototypeOf(this).constructor; //new 키워드로 실행되었을 때의 this(인스턴스)의 생성자, 즉 자식 클래스
        result = Reflect.construct(Super, arguments, NewTarget); //프로토타입으로느 
      } else {
        result = Super.apply(this, arguments);
      }
      return _possibleConstructorReturn(this, result); //여기서만 쓰임
    };
}

//---------- 대체 코드 ---------
/*
 ES5에서는 어디까지나 생성자 '함수'이기 때문에 함수 내장 클래스의 정적 속성으로 메서드를 추가하였으나,
 패키지로 묶을 땐 그 패키지의 속성으로 넣자.
 */

/**
 * @name construct
 * @param {Function} target 생성자/클래스
 * @param {Array} argsList 매개변수 배열
 * @param {Function} newTarget 프로토타입을 연결할 생성자/클래스
 * @return {Object} 인스턴스
 * 
 * @description Reflect.construct(객체 생성 프록시)의 카톡봇 버전
 *  > 나중에 패키지로 만들면 패키지 내 전역에 두고 반환도 따로 해야겠다.
 */
Function.construct = function reflect_construct(target, argsList, newTarget){
    if(typeof target !== 'function'){
      new TypeError(target + ' is not a constructor');
    }
    if(typeof newTarget !== 'function' && newTarget !== undefined){
      new TypeError(newTarget + ' is not a constructor; it must be a constructor, or just be undefined');
    }
    const instance = Object.create(newTarget? newTarget.prototype: target.prototype);
    target.apply(instance, argsList);
    return instance;
};

/**
 * @name createSuper
 * @param {Function} Derived 파생(자식) 클래스
 * @description 원본 함수에서 차용한 것은
 *  1. super 함수를 반환하는 클로저 사용 방식
 *  2. 반드시 call로 this(인스턴스)를 지정해주어야 하는 방식: 오히려 의미로는 괜찮을지도...?
 * 
 * @return {Function} _super
 */
Function.createSuper = function _createSuper(Derived){
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
        if(this instanceof Derived){
          return prototype[key].apply(this, arguments);
        } else {
          throw new SyntaxError(
            'it must be called with the instance'
          );
        }
      })(key);
    }
  }

  return _super;
}


//구현 예시

const Child = (function(Parent){
  Function.inherits(Class, Parent); //상속

  const _super = Function.createSuper(Class);

  function Child(arg1, arg2, arg3){
    _super.call(this, arg1, arg2);
    this.arg3 = arg3;
  }

})(Parent);