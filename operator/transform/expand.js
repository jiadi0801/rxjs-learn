const Rx = require('rxjs/Rx');
const Emitter = require('events').EventEmitter;

const ee = new Emitter();

/**
 * expand得到的observable是不能重复发射值的，
 */
const source = Rx.Observable.fromEvent(ee, 'click');

// const example = source.expand(val => Rx.Observable.of(2 * val)).take(5);

const example = source.mergeMap(val => Rx.Observable.of(val).expand(val => Rx.Observable.of(2 * val)).take(5).last());

const subscribe = example.subscribe({
    next: val => console.log('result', val),
    complete: () => console.log('complete')
});

setInterval(() => {
    console.log('emit');
    // example.subscribe({
    //     next: val => console.log('result', val),
    //     complete: () => console.log('complete')
    // });
    ee.emit('click', 1);
}, 1000);