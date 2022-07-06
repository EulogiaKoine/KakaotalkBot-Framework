var Child = (function (_Parent) {
    _inherits(Child, _Parent);
  
    const _super = _createSuper(Child);
    const m = _defineMethod(Child);
  
    function Child(v) {
      _classCallCheck(this, Child);
      _super.call(this, v);
  
      _this.v++;
    }
  
    m(function method(){
      _super.method.call(this);
      this.v++;
    });
  
    m(function getAttr(){
      return 1;
    }, 'get');
  
    return Child;
})(Parent);