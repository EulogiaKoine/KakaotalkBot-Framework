"use strict";

module.exports = function(STList /* setTimeout 실행 중 목록 */){

function clearTimeout2(i /* setTimeout ID */){
    if(i in this){
        this[id].c = true; //취소 요청
    }
}

return clearTimeout2.bind(STList);
};