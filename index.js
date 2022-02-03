// console.log("hi there");
const myarr = [9, 8, 3, 6, 7, 4];

const accumulator = (arr, acc) => {
  //do add to acc
  console.log("array.legth", arr.length);
  if (arr.length == 0) {
    console.log("1=>", acc);
    return acc;
  }
  const num = arr.pop();
  // acc = acc + Number(arr.pop());
  console.log("logging steps=>", acc, "with", num);
  accumulator(arr, acc + Number(num));
};

const calling = accumulator(myarr, (sum = 0));
console.log("calling", calling);
