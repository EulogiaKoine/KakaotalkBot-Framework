"use strict";

module.exports = (function(){

importClass(
    java.lang.Thread,
    java.util.concurrent.LinkedBlockingQueue
);

const SQ = require('./send.js').queue; //send queue
const Q = new LinkedBlockingQueue();

/**
 * @name loop
 * @description 오직 텍스트 가공의 비동기적 처리를 위한 함수.
 */
function loop(){
    let i;
    while(i = Q.take()){
        SQ.put({
            r: i.r,
            t: i.f(i.i)
        });
    }
}

const thread = new Thread({
    run: loop
});

/**
 * @name process
 * @param {String} r room
 * @param {Object} i information to be processed into text
 * @param {Function} f function that should process the info. into text
 */
function process(r, i, f){
    if(r){
        if(typeof f === 'function'){
            Q.put({
                r: r,
                i: i,
                f: f
            });
        } else {
            throw new SyntaxError("process() need a 3rd argument as a function that should process the information(2nd argument) into a text");
        }
    } else {
        throw new SyntaxError("process() need a 1st argument as a room that should send to");
    }
};


return {
    thread: thread,
    queue: Q,
    start: () => thread.start(),
    process: process.bind()
};
})();