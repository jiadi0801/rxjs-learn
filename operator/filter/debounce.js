const Rx = require('rxjs/Rx');

/**
 * 在每个源observable发射值时，判定下时间是否处于duration observable规定的事件段内，如果是，则将这个发射值作为待输出项，等下一个duration time
 */

// const example = Rx.Observable.of('wait', 'one', 'second', 'last will display');

// const debouncedExample = example.debounce(() => Rx.Observable.timer(1000));

// const subscribe = debouncedExample.subscribe(console.log);

const interval = Rx.Observable.interval(1000);

const debouncedExample = interval.debounce(val => Rx.Observable.timer(val * 200));

const subscribe = debouncedExample.subscribe(val => console.log(`exam: ${val}`));