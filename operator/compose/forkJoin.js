const Rx = require('rxjs/Rx');

/**
 * 当最慢一个observable完成时，发出每个observable的最新值
 */
const myPromise = val => new Promise(resolve => setTimeout(() => resolve(`Promise Resolved: ${val}`), 5000));

const example = Rx.Observable.forkJoin(
    Rx.Observable.of('hello'),
    Rx.Observable.of('world').delay(1000),
    Rx.Observable.interval(1000).take(1),
    Rx.Observable.interval(1000).take(2),
    myPromise('RESULT')
);

const subscribe = example.subscribe(val => console.log(val));


const queue = Rx.Observable.of([1,2,3,4,5]);

const exampleTwo = queue.mergeMap(q => Rx.Observable.forkJoin(...q.map(myPromise)));

const subscribeTwo = exampleTwo.subscribe(val => console.log(val))
