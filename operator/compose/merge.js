const Rx = require('rxjs/Rx');
/**
 * 将所有observable的输出按时间顺序输出（谁产出立马就输出），看上去就是一个observable一样
 */
const first = Rx.Observable.interval(2500);
const second = Rx.Observable.interval(2000);
const third = Rx.Observable.interval(1500);

const example = Rx.Observable.merge(
    first.mapTo('FIRST'),
    second.mapTo('SECOND'),
    third.mapTo('THIRD')
);

const subscribe = example.subscribe(val => console.log(val));