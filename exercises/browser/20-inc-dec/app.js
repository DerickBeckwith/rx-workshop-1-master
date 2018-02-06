
  /** NOTE: Setup */
  const inc = document.querySelector('#inc');
  const dec = document.querySelector('#dec');
  const output = document.querySelector('output');
  
  /** NOTE: these are different because they're coming from a global */
  const { BehaviorSubject } = Rx;
  const { fromEvent, of } = Rx.Observable;
  const { map, scan } = Rx.operators;

  /** TODO:
    1. update output with incremented and decremented values
    2. start output with value zero

    NOTE: Hint `scan` is a great way to update a state
      without pushing your state to some global scope.
      If you're familiar with Redux, it's going to end up a
      little like that.

    TODO: BONUS - Add a button that increments by 10
  */

  const inc$ = fromEvent(inc, 'click');
  const dec$ = fromEvent(dec, 'click');

  const subject = new BehaviorSubject('INIT');

  inc$.pipe(
    map(() => 'INC')
  ).subscribe(subject);

  dec$.pipe(
    map(() => 'DEC')
  ).subscribe(subject);

  const value$ = subject.pipe(
    scan((value, type) => {
      switch(type) {
        case 'INC':
        return value + 1;
        case 'DEC':
        return value - 1;
        default:
        return value;
      }
    }, 0)
  );

  // const value$ = subject.pipe(
  //   scan((value, e) => value + 1, 0)
  // );
  
  value$.subscribe(value => output.innerText = value);