const Rx = require('rxjs/Rx');

const { Observable } = Rx;
// TODO: create an observable with the Observable constructor that
// emits the values 1, 2, 3 and completes.
const source$ = new Observable(subscriber => {
  subscriber.next(1);
  subscriber.next(2);
  subscriber.next(3);
  subscriber.complete();
}); //<-- set me!

console.log('start');

source$.subscribe(
  x => console.log(x),
  err => console.error(err),
  () => console.info('done')
);

console.log('stop');