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
