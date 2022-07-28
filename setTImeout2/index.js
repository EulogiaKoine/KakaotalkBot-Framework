'use strict';

module.exports = (function(){

const STList = {}; //동작 중인 setTimeout 객체 목록
const SIList = {}; //동작 중인 setTimeout 객체 목록

const thread = require('./thread.js')(STList, SIList);
const req = thread.req;

const setTimeout2 = require('./setTimeout2.js')(STList, req);
const clearTimeout2 = require('./clearTimeout2.js')(STList);

const setInterval2 = require('./setInterval2.js')(SIList, req);
const clearInterval2 = require('./clearInterval2.js')(SIList);

function init(global){
    global.setTimeout = setTimeout2;
    global.clearTimeout = clearTimeout2;

    global.setInterval = setInterval2;
    global.clearInterval = clearInterval2;

    thread.start();
}

const output = {
    init: init.bind(),
    thread: thread,
    setTimeout2: setTimeout2,
    clearTimeout2: clearTimeout2,
    setInterval2: setInterval2,
    clearInterval2: clearInterval2,
    running: {
        timeout: STList,
        interval: SIList
    },

    description: [
        "기존 Rhino JS의 내장 setTimeout 및 관련 함수를 웹 브라우저 환경에 가깝게 재구현한 함수입니다.",
        "매번 스레드를 생성하던 방식을 개선했으며, 실행 요청된 함수끼리는 동기적으로 실행됩니다.",
        "",
        "해당 모듈의 init() 메서드의 인자로 글로벌 스코프를 넣어 기존 setTimeout/setInterval 및 관련 함수를 대체할 수 있습니다.",
        "ex) koine.setTimeout2.init(this);",
        "",
        "함수의 인터페이스는 전혀 달라지지 않습니다."
    ].join("\n")
};

for(let i in output){
    Object.defineProperty(output, i, {
        enumerable: true,
        writable: false,
        configurable: true
    });
}

for(let i in output.running){
    Object.defineProperty(output.running, i, {
        enumerable: false,
        writable: false,
        configurable: true
    });
}

return output;
})();