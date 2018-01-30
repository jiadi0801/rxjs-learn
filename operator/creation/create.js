const Rx = require('rxjs/Rx');

/**
 * 创建最基础的observable
 */

const hello = Rx.Observable.create(observer => {
    observer.next('hello');
    observer.next('world');
});

const subscribe = hello.subscribe(console.log);


const evenNumbers = Rx.Observable.create(observer => {
    let value = 0;
    const interval = setInterval(() => {
        if (value % 2 === 0) {
            observer.next(value);
        }
        value++;
    }, 1000);
    return () => clearInterval(interval);
});

const subscribe1 = evenNumbers.subscribe(console.log);

setTimeout(() => {
    subscribe1.unsubscribe();
}, 12110);