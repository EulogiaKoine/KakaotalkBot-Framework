//인터페이스

var Child = _class(
    _extends(Parent),

    function Child(v) {
        _super(v);
        this.v++;
    }, //첫 번째 인자: constructor; 클래스명은 함수의 name 속성으로 판별

    static('attr', 'value'),
    static('get', 'getAttr', function(){
        return this.attr;
    }),

    proto('attr', 1),
    proto('method', function(){
        _super.method();
        this.v++;
    }),
    proto('get', 'getV', function(){
        return this.v;
    })
);

//조금 더 개량하면...?
var Child = _class('Child', _extends(Parent),

    constructor(function (v) {
        _super(v);
        this.v++;
    }),

    static('attr', 'value'),
    static('get', 'getAttr', function(){
        return this.attr;
    }),

    proto('attr', 1),
    proto('method', function(){
        _super.method();
        this.v++;
    }),
    proto('get', 'getV', function(){
        return this.v;
    })
);

//_class도 클래스로 변경
// 문법 친화적 vs 객체 객체 지향

var Child = new Class('Child', _extends(Parent),

    
);