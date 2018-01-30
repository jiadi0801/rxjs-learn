const Rx = require('rxjs/Rx');

const source = Rx.Observable.throw('this is an error');

const example = source.catch(val => Rx.Observable.of(`I caught: ${val}`));

const subscribe = example.subscribe(val => console.log(val));