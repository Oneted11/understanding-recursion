const myarr = [9, 8, 3, 6, 7, 4];

const adder = (arr) => {
  // return zero when array is finished
  //doesnt return without it
  if (arr.length === 0) return 0;
  //call adder with the remaining array after adding the last item through popping
  else return arr.pop() + adder(arr);
};
console.log(adder(myarr));
