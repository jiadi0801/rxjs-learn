const Rx = require('rxjs/Rx');

/**
 * 将源observable的每项关联到某个内部的observable，并组成一个新的observable，新observable的值由第二个参数的回调决定
 */
const interval = Rx.Observable.interval(1000).map(val => `outer ${val}`);

const source = Rx.Observable.interval(500).map(val => `inner ${val}`).take(4);

const example = interval.concatMapTo(
    source,
    (outer, inner) => `${outer} ${inner}`
);

const subscribe = example.subscribe(val => console.log(val));