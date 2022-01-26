console.log("hi there");
const myarr = [9, 8, 3, 6, 7, 4];

const accumulator = (arr, acc) => {
  //do add to acc
  //   i = 1;
  if (arr.length > 0) {
    acc = acc + Number(arr.shift());

    accumulator(arr, acc);
  } else return acc;
};
const sum = 0;
console.log("the ans=>", accumulator(myarr, sum));
