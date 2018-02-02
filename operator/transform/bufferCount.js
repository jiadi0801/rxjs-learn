const Rx = require('rxjs/Rx');

/**
 * bufferCount,第一个设置buffer大小，当buffer满了或者complete时，发出buffer数组
 * 第二个参数设置每个buffer合适启用新缓冲区，不提供情况下，当当前缓存区输出后开启下一个
 */
const source = Rx.Observable.interval(500);

const bufferThree = source.bufferCount(3, 0);

const subscribe = bufferThree.subscribe(val => console.log('buffered values ', val));