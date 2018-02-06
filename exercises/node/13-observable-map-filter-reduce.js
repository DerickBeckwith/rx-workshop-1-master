import { Observable } from 'rxjs/Observable';
// import { map } from 'rxjs/add/operator/map';
import { map, filer, reduce } from 'rxjs/operators';  // RxJs 5.5
import { pipe } from 'rxjs/utils/pipe';

const data$ = require('./fixtures/13-data');

/** TODO:
  1. Take the odd numbers from the observable `data$`,
  2. Double them (i.e. 1 -> 2, 3 -> 6, etc)
  3. Sum them
  4. Log the result
  5. Try using the pipeable operators from `rxjs/operators`!
*/

/**
  NOTE: expected output
  50
*/

//TODO: try replacing `reduce` with `scan`!

const pipe = (...funcs) => (x) => fn.reduce((prev, fn) => fn(prev), x);

pipe(
  x => x + x,
  x => x + '!',
)(2); "4!"

Observable.prototype.map = fn => new Observable(
  subscriber => {
    return this.subscribe({
      next(value) { subscriber.next(fn(value)); },
      error(err) { subscriber.error(err); },
      complete() { subscriber.complete(); },
    });
  }
);

const doItTwice = (fn) => pipe(
  map(fn),
  map(fn),
);

// data$.filter(x => x % 2 === 1)
// .map(x => x * 2)
// .reduce((acc, x) => acc + x)
// .subscribe(x => console.log(x));

data$
  .filter(n => {
    console.log('filter:', n);
    return n % 2 === 1;
  })
  .map(n => {
    console.log('map:', n);
    return n + n;
  })
  .reduce((acc, n) => {
    console.log('reduce:', acc, n);
    return acc + n;
  }, 0)
  .subscribe(x => console.log('result:', x));