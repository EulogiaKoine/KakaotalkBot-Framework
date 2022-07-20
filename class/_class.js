'use strict';

module.exports = (function(){

const _inherits = require('./inherits.js');
const _classCallCheck = require('./_classCallCheck.js');
const _createSuper = require('./_createSuper.js');
const _isUsingSuper = require('./_isUsingSuper.js');
const _repairConstructor = require('./_repairConstructor.js');
const _repairMethod = require('./_repairMethod.js');
const _defineProperty = require('./_defineProperty.js');

/**
 * @name _class
 * @param {String} name name of the Class
 * @return {Function} Class
 * 
 * @description construct a class with arguments
 */
function _class(name){
    //클래스명 검사
    if(name === undefined){
        throw new SyntaxError("please set the name of Class");
    }
    name = new String(name);

    //클래스 제작용 함수가 생성한 인자값만 필터링
    const args = Array.from(arguments).splice(1).filter(v => v.isClassHelper);
    
    //생성자 함수
    let constructor = args.splice(args.findIndex(v => v.name === "constructor"), 1)[0];
    if(!constructor){
        throw new SyntaxError("there must be a Constructor function");
    } else if(args.some(v => v.name === "constructor")){
        throw new SyntaxError("there must be onle one Constructor function");
    }

    //인자로 받은 프로토타입 필터링
    const prototype = args.filter(v => v.name === "prototype field");

    //부모 클래스
    let Super = args.find(v => v.name === "Super");
    if(Super !== undefined && typeof Super.value === "function"){
        //본인과 이름이 같은 클래스를 상속하지 않는지 검사
        if(Super.name === name){
            throw new SyntaxError("Class cannot extends itself; its name and the name of Super are the same, '"+name+"'");
        }
        Super = Super.value;
    }

    //클래스로 재구축
    //_super 키워드를 클로저로 사용하기 위한 시퀀스
    let Class = (function (_Super){
        //_super을 참조 가능한 클로저로 생성자 함수 재구축
        const _Class = eval(_repairConstructor(constructor, name));

        if(_Super){
            _inherits(_Class, _Super); //부모 클래스 상속
            var _super = _createSuper(_Class); //_super 키워드 생성
        } else if(_isUsingSuper(constructor)){
            throw new SyntaxError("'_super' keyword unexpected here"); //아무것도 상속하지 않을 땐 _super 키워드 사용불가(정적 클래스 강제)
        }

        //
        for(let prop of prototype){
            if(typeof prop.value === 'function'){
                prop.value = eval(_repairMethod(prop, prop.key)); //_super.method(...)를 _super.method.call(this, ...)로 변환
            }
            _defineProperty(_Class.prototype, prop);
        }

        return _Class;
    })(Super);

    //static field
    const static = args.filter(v => v.name === "static field");
    for(let prop of static){
        _defineProperty(Class, prop);
    }

    return Class;
}


return _class;
})();