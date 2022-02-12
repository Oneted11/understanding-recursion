# Understanding Recursion

Trying to understand recursion

## Learning resources

I'm currently using

### Theory

- https://www.geeksforgeeks.org/recursive-functions/

### Exercise

trying to do

> Try to calculate a sum recursively without Array.reduce by implementing a function which accepts an array of numbers and an accumulating parameter. Take one element of the array and add it to the accumulator.

as suggested on this [tweet reply](https://twitter.com/flosalihovic/status/1485865331562274816)
prompted by my [tweet](https://twitter.com/reithi_254/status/1485818354464169987) about not having a deep understanding of recursion and array.reduce

# How to run

Youre gonna need a server and point it towards index.html.
If you're using [visual studio code](https://code.visualstudio.com/) you can use [five server(Live server)](https://marketplace.visualstudio.com/items?itemName=yandeu.five-server) . It's what I'm using

# Trial One

./index.js

```javascript
// console.log("hi there");
const myarr = [9, 8, 3, 6, 7, 4];

const accumulator = function (acc, arr) {
  // console.log("bloody arr", arr);
  //do add to acc
  // console.log({ acc, arr });

  if (arr.length == 0) {
    return acc;
  } else {
    const num = arr.pop();

    acc = acc + Number(num);
    // console.log("logging steps=>", acc, "with", num);
    accumulator(acc, arr);
  }
};

const calling = accumulator(0, myarr);

console.log("calling", calling);
```

It failed to return the answer even through it breaks at the right point.

## Added callback with the help of a friend

./index2.js

```javascript
const myarr = [9, 8, 3, 6, 7, 4];

const accumulator = (arr, acc = 0, done) => {
  if (arr.length == 0) return done(acc);

  const num = arr.pop();
  acc = acc + Number(num);

  // log for visibility
  console.log({ num, acc, arr });

  accumulator(arr, acc + Number(num), done);
};

const handleAccumulatorFinish = (accumulated) => {
  console.log("accumulated", accumulated);
};

const accumulated = accumulator(myarr, 0, handleAccumulatorFinish);
```

## shortened and simplified version

> the chad version

index3.js

```javascript
const myarr = [9, 8, 3, 6, 7, 4];

const adder = (arr) => {
  // return zero when array is finished
  //doesnt return without it
  if (arr.length === 0) return 0;
  //call adder with the remaining array after adding the last item through popping
  else return arr.pop() + adder(arr);
};
console.log(adder(myarr));
```
