const Rx = require('rxjs/Rx');
/**
 * 类似数组的concat，一个observable接一个的接收，遇到无限输出的observable，后续observable没有机会执行
 */
function example1() {
    const sourceOne = Rx.Observable.of(1, 2, 3);
    const sourceTwo = Rx.Observable.of(4, 5, 6);
    
    const example = sourceOne.concat(sourceTwo);
    
    const subscribe = example.subscribe(val => console.log('concat', val));
}
example1();

function example2() {
    const source = Rx.Observable.interval(2000);
    const example = source
        .map(val => Rx.Observable.of(val + 10))
        .concatAll();

    const subscribe = example.subscribe(val => console.log('add 10', val));
}
example2();


