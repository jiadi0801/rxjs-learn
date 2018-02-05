const Rx = require('rxjs/Rx');


/**
 * 主observable发出新值会打断上一个值的内部observable的发射，switch代表同一个时刻只有一个内部observable在发射值
 */
const source = Rx.Observable.timer(0, 5000);

const example = source.switchMap(() => Rx.Observable.interval(900));

const subscribe = example.subscribe(val => console.log(val));