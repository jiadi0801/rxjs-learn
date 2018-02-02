const Rx = require('rxjs/Rx');

/**
 * 外层observable当发出值时，将用exhaustMap里observable代替外层observable，
 * 在exhaustMap里的observable激活期间，外层observable发出的任何值都会被忽略；
 */
const interval = Rx.Observable.interval(1000);

const delayedInterval = interval.delay(100).take(4);

const exhaustSub = Rx.Observable.merge(delayedInterval, Rx.Observable.of(true))
    .do(i => console.log('e',i))
    .exhaustMap(_ => Rx.Observable.interval(2000).take(1))
    .subscribe(val => console.log(val));