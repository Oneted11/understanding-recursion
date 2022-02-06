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
