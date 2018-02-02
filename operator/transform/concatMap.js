const Rx = require('rxjs/Rx');

/**
 * 将同步的数据做成异步链式方式
 * 接收返回observable和promise对象
 */

function ex1 () {
    const source = Rx.Observable.of('hello', 'goodbye');

    const example = source.concatMap(val => Rx.Observable.interval(500).take(3).map(val => 'interval' + val));
    
    const subscribe = example.subscribe(val => console.log('example', val));
}

// ex1();

function ex2 () {
    const concatMapSub = Rx.Observable.of(2000, 1000)
        .concatMap(v => Rx.Observable.of(v).delay(v))
        .subscribe(v => console.log('concatMap ', v));

    const mergeMapSub = Rx.Observable.of(2000, 1000)
        .mergeMap(v => Rx.Observable.of(v).delay(v))
        .subscribe(v => console.log('mergeMap ', v));

    // concatMap === map + concatAll
    const concatAllSub = Rx.Observable.of(2000, 1000)
        .map(v => Rx.Observable.of(v).delay(v)).concatAll()
        .subscribe(v => console.log('concatAll ', v));
}

ex2();
