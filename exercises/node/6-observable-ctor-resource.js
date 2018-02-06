import { Observable } from 'rxjs/Observable';

const Rx = require('rxjs/Rx');
const Resource = require('./fixtures/6-Resource');

// TODO: create an observable with the Observable constructor that
// creates a new resource, subscribes to it's "data" event, and tears it
// down when it's done.

/**
NOTE: `Resource` usage:

const resource = new Resource(); // start the resource;
resource.addEventListener('data', handler); // listen for data events
resource.removeEventListener('data', handler); // stop listening for data events
*/

new Observable(subscriber => {
  /* setup logic to observe something */

  return () => {
    /* teardown logic here */
  }
});

const source$ = new Rx.Observable(subscriber => {
  const handler = e => subscriber.next(e);
  const resource = new Resource(); // start the resource;
  resource.addEventListener('data', handler); // listen for data events

  return () => {
    resource.removeEventListener('data', handler); // stop listening for data events
  }
}); // <-- set me!

const subscription = source$.subscribe(
  x => console.log(x),
  err => console.error(err),
  () => console.info('done')
);

setTimeout(() => subscription.unsubscribe(), 2100);

/**
NOTE: output should be:

Resource: started
Resource: event listener added
0
1
2
3
Resource: event listener removed
Resource: closed
*/
