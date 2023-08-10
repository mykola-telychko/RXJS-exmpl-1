import { withLatestFrom, map } from 'rxjs/operators';
import { interval } from 'rxjs';

// Example 1: Latest value from quicker second source

//emit every 5s
const srcInterval = interval(5000);
//emit every 1s
const secondSrc = interval(1000);

const example = srcInterval.pipe(
  withLatestFrom(secondSrc),
  map(([first, second]) => {
    return `First Source (5s): ${first} Second Source (1s): ${second}`;
  })
);

const subscribe = example.subscribe((val) => console.log(val));
