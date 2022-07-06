/**
 * @name _isNativeReflectConstruct
 * @return {Boolean}
 * 
 * @description Reflect 내장 객체와 construct 메서드 여부를 확인하여 객체가 해당 프록시로 생성되었는지 확인
 */
function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false; // sham 속성이 뭐지...?
    if (typeof Proxy === "function") return true; //프록시는 어차피 카톡봇에 없다
    try {
      Boolean.prototype.valueOf.call( //왜 굳이 이러는지 솔직히 모르겠다. 형태적 안정감인가?
        Reflect.construct(Boolean, [], function () {})
      );
      return true;
    } catch (e) {
      return false;
    }
}

//대체 코드
true; //내부 구현부는 저만 건드리고, Function.construct는 반드시 확장해서 쓸 테니...

//그나마 조금 검사하자면...
const _isNativeReflectConstruct = () => !!Function.construct;