const Rx = require('rxjs/Rx');
/**
 * 二维的merge方法
 */

// const myPromise = val => new Promise(resolve => setTimeout(() => resolve(`Result: ${val}`), 2000));

// const source = Rx.Observable.of(1,2,3);

// const example = source
//     .map(val => Rx.Observable.fromPromise(myPromise(val)))
//     .mergeAll();

// const subscribe = example.subscribe(val => console.log(val));


const interval = Rx.Observable.interval(500).take(5);

interval
    .map(val => interval.delay(1000).take(3))
    .mergeAll(2)
    .subscribe(val => console.log(val))
