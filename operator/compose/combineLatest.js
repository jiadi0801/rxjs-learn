const Rx = require('rxjs/Rx');
/**
 * 任意一个observable发出值时，输出所有observable的最新值组成的数组
 */
const timerOne = Rx.Observable.timer(1000, 1000);
const timerTwo = Rx.Observable.timer(1000, 1000);
const timerThree = Rx.Observable.timer(1000, 1000);

const combined = Rx.Observable.combineLatest(timerOne, timerTwo, timerThree);

const subscribe = combined.subscribe(latestValue => {
    const [t1, t2, t3] = latestValue;
    console.log(
        `Timer One Latest: ${t1}, 
         Timer Two Latest: ${t2}, 
         Timer Three Latest: ${t3}`
       );
});
