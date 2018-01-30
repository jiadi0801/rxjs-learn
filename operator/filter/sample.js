const Rx = require('rxjs/Rx');

/**
 * 根据sample里的notifier observable的发射时间点对源observable进行采样，采样对象为源observable最新值，且这个值没有被消费，也即没有没有发射出去。
 */
const source = Rx.Observable.interval(1000);

const example = source.sample(Rx.Observable.interval(600));

const subscribe = example.subscribe(val => console.log(val));