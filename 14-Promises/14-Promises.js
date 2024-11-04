const delayFn = (time) => {
  return new Promise((resolve) => setTimeout(resolve, time));
};

console.log('Promise Lecture Starts');
delayFn(2000).then(() => console.log('after 2 seconds promise is resolved'));
console.log('End');
/*
Output: 
  Promise Lecture Starts
  End
  after 2 seconds promise is resolved
*/

const divideFn = (num1, num2) => {
  return new Promise((resolve, reject) => {
    if (num2 === 0) {
      reject('We cannot perform division by 0');
    } else {
      resolve(num1 / num2);
    }
  });
};

divideFn(10, 0)
  .then((result) => console.log('Result:', result))
  .catch((err) => console.log('Error:', err));

/*
Output:
  Error: We cannot perform division by 0
*/
