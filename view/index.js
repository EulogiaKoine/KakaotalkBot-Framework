"use strict";

module.exports = (function(){

const send = require('./send.js');
const process = require('./process.js');

function init(global){
    send.start();
    global.send = send.send;

    process.start();
    global.process = process.process;
};

const output = {
    init: init.bind(),
    send: send,
    process: process,
    description: [
        " < 소개 >",
        "메시지 전송이 메인 스레드에서 타 연산을 방해하지 않도록 비동기로 변환한 모듈.",
        "기본 기능은 거의 갇지만 무거운 외부로의 요청을 분리했기 때문에 총 연산량에 비례하여 효율 향상을 기대할 수 있을 것이다.",
        "",
        " < 적용법 >",
        "글로벌 스코프에서 init(this /* global 객체 */); 실행 시 전역에 함수 or 클래스가 추가된다.",
        "",
        " < 사용법 >",
        "▸ void send(room, msg): Api.replyRoom과 동일하지만 3번째 인자가 없다.",
        "",
        "▸ void process(room, info, func)",
        " @param {String} room 메시지를 보낼 방",
        " @param {*} info 가공될 정보. func의 첫 번째 인자로 들어간다.",
        " @param {Function} func info를 인자로 받는 함수로, 텍스트를 반환해야 한다."
    ].join("\n")
};

for(let i in output){
    Object.defineProperty(output, i, {
        enumerable: true,
        configurable: true
    });
}

return output;
})();