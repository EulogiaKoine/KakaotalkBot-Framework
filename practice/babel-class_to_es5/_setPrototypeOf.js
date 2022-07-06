/**
 * @name _setPrototypeOf
 * @param {*} o 
 * @param {*} p 
 * @return {*} __proto__ 속성을 상속한 o
*/
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function _setPrototypeOf(o, p) {
          o.__proto__ = p;
          return o;
        };
    return _setPrototypeOf(o, p);
}

//대체 코드
o.__proto__ = p; //단, 둘 다 객체일 것.