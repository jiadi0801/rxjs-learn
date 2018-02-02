const Rx = require('rxjs/Rx');
const Emitter = require('events').EventEmitter;

/**
 * bufferBy这个observable可以重复发出通知，
 * 当发出通知时，将buffer的caller过往(上一个bufferby到这个bufferby之间)的值收集到数组输出，
 * 如果caller在这段时间无输出，那么subscribe也不会执行（见下面的.take(5)）
 */
const ee = new Emitter();

const myInterval = Rx.Observable.interval(500)
    // .take(5);

const bufferBy = Rx.Observable.fromEvent(ee, 'click');

const myBufferedInterval = myInterval.buffer(bufferBy);

const subscribe = myBufferedInterval.subscribe(val => {
    console.log('buffered values ', val);
});

setInterval(() => {
    ee.emit('click');
}, 1100);