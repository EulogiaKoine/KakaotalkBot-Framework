var Child = _class('Child', _extends(Parent),
    
    constructor(function(v){
        _super(v);
        this.v++;
    }),

    static("static field name", "value"),
    static("get", "static field name that should be called", function(){
        return "value";
    }),
    static("static method name", function(){
        return "value";
    }),

    prop("prototype field name", "value"),
    prop("get", "prototype field name that should be called", function(){
        return "value";
    }),
    prop("prototype method name", function(v){
        _super['super method name'](v);
        this.v++;
    })
);


//example

var Square = _class('Square', _extends(Rectangle),
    constructor(function(side){
        _super(side, side);
    }),

    prop('setSide', function setSide(side){
        _super.setWidth(side);
        _super.setHeight(side);
    })
);