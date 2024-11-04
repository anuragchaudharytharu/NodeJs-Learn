const delayFn = (time) => {
  return new Promise((resolve) => setTimeout(resolve, time));
};

const delayedGreeting = async (name) => {
  await delayFn(2000);
  console.log(name);
};

delayedGreeting('Deeium');
/*
Output after 2 sec:
  Deeium
*/

const divideFn = async (num1, num2) => {
  try {
    if (num2 === 0) throw new Error('It cannot be divided by 0');
    return num1 / num2;
  } catch (err) {
    console.log(err);
    return null;
  }
};

const mainFn = async () => {
  console.log(await divideFn(10, 2)); //5
  console.log(await divideFn(10, 0)); //Error: It cannot be divided by 0
};
mainFn();
