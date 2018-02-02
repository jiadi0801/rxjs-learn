const Rx = require('rxjs/Rx');

const interval = Rx.Observable.interval(1000).map(val => `outer ${val}`);

const source = Rx.Observable.interval(500).map(val => `inner ${val}`).take(4);

const example = interval.concatMapTo(
    source,
    (outer, inner) => `${outer} ${inner}`
);

const subscribe = example.subscribe(val => console.log(val));