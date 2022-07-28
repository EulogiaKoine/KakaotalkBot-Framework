'use strict';

importClass(
    java.lang.Thread,
    java.util.concurrent.LinkedBlockingQueue
);

module.exports = function(STList /* 동작 중인 setTimeout 목록{} */, SIList /* 동작 중인 setInterval 목록{}*/){

const Q = new LinkedBlockingQueue();
const now = Date.now;

/**
 * @name loop
 * @description setTimeout과 setInterval 실행 요청을 처리하는 함수
 *  1ms마다 큐의 모든 요청을 검사 및 처리
 * 
 * 장점_
 *  딜레이를 가지기 때문에 멈추지 않고 돌리는 것보다 안정적
 * 
 * 단점_
 *  2개 이상의 대기 요청 검사 중 그보다 더 빨리 실행되는 요청이 들어올 경우 최소 1ms의 딜레이를 거침.
 *  >> 대기 요청을 반복이 끝날 때 큐로 복귀시켜 반복 중 들어온 요청에 우선순위를 줌으로써 해결.
 *
 */
function loop(){
    let l = [], p = [], time, i /* iterator variable */; //변수 공간 할당 시간 줄이려고 미리 이 스코프에 선언해 두고 재활용하기

    while(true){
        l[0] = Q.take(); //새로운 요청이 하나라도 들어올 때까지
        const size = Q.size() + 1;
        for(i = 1; i < size; i++){
            l[i] = Q.poll(); //반복의 시작 시점에 2개 이상 쌓여있을 수도 있기 때문에 일단 모든 요청 배열화
        }

        time = now(); //현재시각

        for(i in l){ //현재 모든 요청에 대응
            i = l[i];
            /*
             {
                f: 실행될 함수(function)
                a: 인자 배열(arguments)
                e: 실행 예정 시점(execute)
                r: 반복 여부(repeat) - setInterval only
                d: 반복 시 딜레이(delay) - setInterval only
                i: ID
                c: 취소 여부(canceled)
             }
             */

            if(i.c){ //취소되었으면(canceled)
                //목록에서 삭제하고
                if(i.r){ //setInterval의 경우
                    delete SIList[i.i];
                } else { //setTimeout의 경우
                    delete STList[i.i];
                }

                continue; //이후 처리는 전부 넘기기
            }

            if(i.e <= time){ //현재시각이 실행(execute) 예정 시점을 지났다면
                //실행부
                if(i.a){ //지정된 인자가 존재하면
                    i.f.apply(void 0, a); //인자 넣어서 실행
                } else {
                    i.f(); //else, anyway.
                }

                //setInterval의 경우
                if(i.r){ //repeat === true?
                    i.e += i.d; //다음 실행 예정 시점 += 딜레이
                    p.push(i); //실행 재요청 예정
                } else { //setTimeout이면
                    delete STList[i.i]; //목록에서 삭제
                }
            } else { //아직 실행 시점이 아니라면
                p.push(i); //대기 상태로 복귀 예정
            }
        }

        //반복 도중 들어온 요청에 우선순위를 주기 위해 대기열 복귀는 반복의 끝에서.
        for(i in p){
            Q.put(p[i]);
        }

        //재활용을 위한 초기화
        l = [];
        p = [];

        Thread.sleep(1); //1ms 딜레이
    }
}


const thread = new Thread({
    run: loop
});

/**
 * @name req
 * @param {Object} i setTimeout/setInterval로부터의 요청 객체
 * @description 오직 setTimeout/setInterval에서 사용하기 위한 큐 접근 함수
 */
const req = (q/*queue*/ => i/*request*/ => q.put(i))(Q); //빠른 접근을 위한 클로저


return {
    thread: thread,
    queue: Q,
    loop: loop,
    start: () => thread.start(),
    req: req
};
};