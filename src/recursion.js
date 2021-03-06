// Complete the following functions.

const nFibonacci = (n) => {
  // fibonacci sequence: 1 2 3 5 8 13 ...
  // return the nth number in the sequence
  if (n < 2) return 1;
  return nFibonacci(n - 2) + nFibonacci(n - 1);
};

const nFactorial = (n) => {
  // factorial example: !5 = 5 * 4 * 3 * 2 * 1
  // return the factorial of `n`
  if (n === 1) return n;
  return n * nFactorial(n - 1);
};

const checkMatchingLeaves = (obj) => {
  // return true if every property on `obj` is the same
  // otherwise return false
  let flag = true;
  let prop = [];
  let i = 0;
  Object.keys(obj).forEach((key) => {
    prop[i++] = obj[key];
  });
  prop = prop[0];
  const checker = (objCheck) => {
    Object.keys(objCheck).forEach((key) => {
      if (typeof objCheck[key] === 'object') return checker(objCheck[key]);
      if (prop !== objCheck[key]) flag = false;
    });
    return flag;
  };
  return checker(obj);
};

/* eslint-enable no-unused-vars */

module.exports = {
  nFibonacci,
  nFactorial,
  checkMatchingLeaves
};
