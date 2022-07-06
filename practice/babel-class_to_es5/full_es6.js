/**
 * @description es5로 변환하기 전 es6 클래스 코드
 */


class Parent {
    constructor(v){
        this.v = v;
    }

    method(){
        
    }
}

class Child extends Parent {
    constructor(v){
        super(v);
        this.v++;
    }

    method(){
        super.method();
    }
}