const Rx = require('rxjs/Rx');

// In Angular use this form:
// import { of } from 'rxjs/observable/of';

const { Observable } = Rx;
const { of } = Observable;
const { asap } = Rx.Scheduler;

//TODO: create an observable of 'foo', 'bar' and 'baz' with `Observable.of`
const source$ = Rx.Observable.of('foo', 'bar', 'baz', asap);  // of is synchronous by default

console.log('start');
source$.subscribe(
  x => console.log(x),
  err => console.error(err),
  () => console.info('done')
);
console.log('stop');

/**
  NOTE: expected output
  start
  foo
  bar
  baz
  done
  stop
*/

// Notice the output is _synchronous_!!
