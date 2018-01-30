const Rx = require('rxjs/Rx');

/**
 * throttle的定时器启动是根据源observable产生值时启动的，并且在duration Observable发出值或完成时，这个duration Observable会被禁用。
 * 因此，interval(1000)的作用其实就相当于delay, 不会永久循环运行的。
 * 另一方面，在duration Observable被禁用后，只有当源observable产生新值是，duration才会再次启动。
 */

const source = Rx.Observable.interval(600);

const example = source.throttle(val => Rx.Observable.interval(1000));
// const example = source.throttle(val => Rx.Observable.of().delay(1000));
// const example = source.throttleTime(1000);

// const subscribe = example.subscribe(val => console.log(val));


const source1 = Rx.Observable
    .interval(1000)
    .throttle(val => new Promise(resolve => setTimeout(() => resolve(`resolved: ${val}`), val * 100)))
    .map(val => `ABB ${val}`);

source1.subscribe(val => console.log(val));