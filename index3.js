const myarr = [9, 8, 3, 6, 7, 4];

const adder = (arr) => {
  return arr.pop() + adder(arr);
};
console.log(adder(myarr));
