const Rx = require('rxjs/Rx');
const EventEmitter = require('events').EventEmitter;
/**
 * 类似于_.debounce
 */
const ee = new EventEmitter();

const example = Rx.Observable.fromEvent(ee, 'input');

const debouncedTime = example.debounceTime(1000);

const subscribe = debouncedTime.subscribe(console.log);

setInterval(() => {
    ee.emit('input', 'input 1');
    ee.emit('input', 'input 2');
    ee.emit('input', 'input 3');
    ee.emit('input', 'input last');
}, 1000);