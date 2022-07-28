"use strict";

module.exports = (function(){

if(!Api){
    throw new InternalError("view.send_ it can only be used in MessengerBot R");
}

importClass(
    java.lang.Thread,
    java.util.concurrent.LinkedBlockingQueue
);

const Q = new LinkedBlockingQueue();

function loop(){
    let i;
    const reply = Api.replyRoom.bind(Api);
    while(i = Q.take()){
        reply(i.r /* room */, i.t /* text */);
    }
}

const thread = new Thread({
    run: loop
});

/**
 * @name send
 * @param {String} r room
 * @param {String} t text
 * @description 비동기 싱글스레드 메시지 전송
 */
function send(r, t){
    if(r){
        Q.put({
            r: r,
            t: t
        });
    } else {
        throw new SyntaxError("send() need a first argument as a room that should send to");
    }
}

return {
    thread: thread,
    queue: Q,
    start: () => thread.start(),
    send: send.bind()
};
})();