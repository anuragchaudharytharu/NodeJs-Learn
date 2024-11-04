const { readFile, writeFile } = require('fs');

console.log('start');

readFile('./content/6-SYNC-first.txt', 'utf8', (error, result) => {
  if (error) {
    console.log(error);
    return;
  }
  const first = result;
  console.log(first); //we will get buffer as a output.This is because we didnt provide 'utf8' between the content and the [ath]. So we must provide 'utf8

  readFile('./content/6-SYNC-second.txt', 'utf8', (error, result) => {
    if (error) {
      console.log(error);
      return;
    }
    const second = result;
    console.log(second);

    writeFile(
      './content/6.ASYNC-result.txt',
      `Here is the result ${first}, ${second}`,
      (err, res) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log(res);
        console.log('done with the task');
      }
    );
  });
});

console.log('starting the next task');
