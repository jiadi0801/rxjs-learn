const Rx = require('rxjs/Rx');
/**
 * 使用最先发出值的observable，不论后续的值的发射频率，race为最先发出值的副本
 */
// const example = Rx.Observable.race(
//     Rx.Observable.interval(1500).mapTo('first'),
//     Rx.Observable.interval(1000).mapTo('winner'),
//     Rx.Observable.interval(2000).mapTo('second')
// );

// const subscribe = example.subscribe(console.log);

const first = Rx.Observable.of('first').delay(100).map(() => {throw 'error'});
const second = Rx.Observable.of('second').delay(200);
const third = Rx.Observable.of('third').delay(300);

const race = Rx.Observable.race(first, second, third)
    .subscribe(val => console.log(val));