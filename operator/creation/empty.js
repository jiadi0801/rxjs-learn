const Rx = require('rxjs/Rx');

/**
 * 直接complete
 */

 const example = Rx.Observable.empty();

 const subscribe = example.subscribe({
     next: () => console.log('next'),
     complete: () => console.log('Complete!')
 });